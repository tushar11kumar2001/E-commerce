const express = require("express");
const { body } = require("express-validator");
const captainController = require("../controllers/captain-controller");

const captainRouter = express.Router();

captainRouter.post(
  "/register",
  [
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("fullName.lastName")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("emailId").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vechicle.color")
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters long"),
    body("vechicle.plate")
      .isLength({ min: 3 })
      .withMessage("Vehicle plate must be at least 3 characters long"),
    body("vechicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be at least 1"),
    body("vechicle.vechicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage(
        "Vehicle type must be one of 'car', 'motorcycle', or 'auto'"
      ),
  ],
  captainController.registerCaptain
);

module.exports = captainRouter;
