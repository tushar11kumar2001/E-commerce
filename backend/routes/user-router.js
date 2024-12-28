const express = require("express");
const { body } = require("express-validator");
const { registerUser } = require("../controllers/user-controller");
const { loginUser } = require("../controllers/user-controller");
const { getProfile } = require("../controllers/user-controller");
const { logoutUser } = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const userRouter = express.Router();

userRouter.post("/register", [
    body('emailId').isEmail().withMessage("Invalid Email"),
    body('fullName.firstName').isLength({min : 3}).withMessage("First name must be at least 3 characters"),
    body('password').isLength({ min : 6 }).withMessage("Password must be greater than 6 charachter")
], 
registerUser
);

userRouter.post("/login", [
    body('emailId').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min : 6 }).withMessage("Password must be greater than 6 charachter")
],
loginUser
);

userRouter.get("/profile", authMiddleware, getProfile);

userRouter.get("/logout", authMiddleware, logoutUser); 
module.exports = userRouter;