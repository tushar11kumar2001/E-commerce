const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 characters long"],
    },
    lastName: {
      type: String,
      minLength: [3, "Last name must be at least 3 characters long"],
    },
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must be at least 6 characters long"],
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: {
      values: ["active", "inactive"],
      message: `{VALUE} is not supported.`,
    },
    default: "inactive",
  },
  vechicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "Plate must be at least 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vechicleType: {
      type: String,
      enum: {
        values: ["car", "motorcycle", "auto"],
        message: `{VALUE} is not supported.`,
      },
      required: true,
    },
  },
  location: {
    lat: {
      type: Number,
    },
    length: {
      type: Number,
    },
  },
});

captainSchema.methods.getJWT = async function () {
  const captain = this;
  const token = await jwt.sign(
    {
      _id: captain._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );
  return token;
};

captainSchema.methods.comparePassword = async function (passwordInputByUser) {
  const captain = this;
  const passwordHash = captain.password;
  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );
  return isPasswordValid;
};

captainSchema.statics.hashPassword = async function (passwordInputByUser) {
  const hashPassword = await bcrypt.hash(passwordInputByUser, 10);
  return hashPassword;
};

const CaptainModel = mongoose.model("captain", captainSchema);
module.exports = CaptainModel;