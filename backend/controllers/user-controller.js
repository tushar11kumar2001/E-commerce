const UserModel = require("../models/user-schema");
const { createUser } = require("../services/user-service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status:"Bad Request - Invalid input data ",
      Error: errors.array(),
    });
  }
  try {
    const { fullName, emailId, password } = req.body;
    const hashPassword = await UserModel.hashPassword(password);
    const user = await createUser({
      firstName: fullName.firstName,
      lastName: fullName.lastName,
      emailId,
      password: hashPassword,
    });

    const token = await user.getJWT();
    res.status(201).json({
      status : "User successfully registered",
      user: user,
      token: token,
    });
  } catch (err) {
    res.status(500).json({
      status: "Internal Server Error ",
      message: err.message,
    });
  }
};

module.exports.loginUser = async (req, res, next) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      status:"Bad Request - Invalid input data ",
      Error: errors.array(),
    });
  };

 try{
   const { emailId, password } = req.body;
  const user = await UserModel.findOne({ emailId : emailId}).select("+password");
  if(!user){
   throw new Error("Invalid credentials")
  };
  const isPasswordValid = await user.comparePassword(password);
  if(!isPasswordValid){
    throw new Error("Invalid credentials")
  }
  const token = await user.getJWT();
  res.status(200).cookie("swiftRideUserToken", token, {
    expires : new Date(Date.now() + 8 *3600000)
  }).json({
    status : "User login successfully",
    token : token,
    user : user
  });
}catch(err){
  return res.status(401).json({
      status : "Failed",
      message : `ERROR : ${err.message}`
  })
}
};

module.exports.profile = (req, res)=>{
  res.status(200).json({
    status:"successfully",
    user : req.user
  })
}
