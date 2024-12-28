const CaptainModel = require("../models/captain-schema");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain-services");
const BlacklistTokenModel = require("../models/blacklistToken-schema");

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
        status: "Bad Request - Invalid input data ",
        Error: errors.array(),
        });
    }
    try {
        const { fullName, emailId, password, vechicle } = req.body;
        const existingCaptain = await CaptainModel.findOne({ emailId });
        
        if (existingCaptain) {  
        return res.status(400).json({
            status: "Bad Request - Invalid input data ",
            message: "Captain already exists",
        });
        }
        const hashPassword = await CaptainModel.hashPassword(password);
        const captain = await captainService.createCaptain({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        emailId,
        password: hashPassword,
        color: vechicle.color,
        plate: vechicle.plate,
        capacity: vechicle.capacity,
        vechicleType: vechicle.vechicleType,
        });
        const token = await captain.getJWT();
        res.status(201).json({
        status: "Captain successfully registered",
        captain: captain,
        token: token,
        });
    } catch (err) {
        res.status(500).json({
        status: "Internal Server Error ",
        message: err.message,
        });
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
        status: "Bad Request - Invalid input data ",
        Error: errors.array(),
        });
    }

    try {
        const { emailId, password } = req.body;
        const captain = await CaptainModel.findOne({ emailId: emailId }).select("+password");
        
        if (!captain) {
        throw new Error("Invalid credentials");
        }
        const isPasswordValid = await captain.comparePassword(password);
        if (!isPasswordValid) {
        return res.status(401).json({
            status: "Unauthorized - Invalid credentials",
            message: "Invalid credentials",
        });
        }
        const token = await captain.getJWT();
        res.cookie('token', token, {  expires: new Date(Date.now() + 24 * 60 * 60 * 1000) });
        res.status(200).json({
        status: "Captain successfully logged in",
        captain: captain,
        token: token,
        });
    } catch (err) {
        res.status(500).json({
        status: "Internal Server Error ",
        message: err.message,
        });
    }
};

module.exports.getProfile = (req, res) => {
    res.status(200).json({
        status: req.captain ? "Successfully" : "Unauthorized",
        captain: req.captain,
    });
};

module.exports.logoutCaptain = async (req, res) => {
    try {
        res.clearCookie("token");
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        await BlacklistTokenModel.create({ token: token });
        res.status(200).json({
            status: "Successfully logged out",
            message: "Successfully logged out",
        });
    } catch (err) {
        res.status(500).json({
            status: "Internal Server Error",
            message: err.message,
        });
    }
}

