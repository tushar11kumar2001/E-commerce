const CaptainModel = require("../models/captain-schema");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain-services");

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
    }