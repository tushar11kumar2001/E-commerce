const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user-controller");
const { userAuthMiddleware } = require("../middlewares/auth-middleware");

const userRouter = express.Router();

userRouter.post(
  "/register",
  [
    body("emailId").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be greater than 6 charachter"),
  ],
  userController.registerUser
);

userRouter.post(
  "/login",
  [
    body("emailId").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be greater than 6 charachter"),
  ],
  userController.loginUser
);

userRouter.get("/profile", userAuthMiddleware, userController.getProfile);

userRouter.get("/logout", userAuthMiddleware, userController.logoutUser);
module.exports = userRouter;
