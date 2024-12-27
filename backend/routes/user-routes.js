const express = require("express");
const { body } = require("express-validator");
const { registerUser } = require("../controllers/user-controller")
const userRouter = express.Router();

userRouter.post("/register", [
    body('emailId').isEmail().withMessage("Invalid Email"),
    body('fullName.firstName').isLength({min : 3}).withMessage("First name must be at least 3 characters"),
    body('password').isLength({ min : 6 }).withMessage("Password must be greater than 6 charachter")
], 
registerUser
)
module.exports = userRouter;