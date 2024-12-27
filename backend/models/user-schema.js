const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
      fullName : {
        firstName : {
            type : String,
            required : true,
            minlength : [3, "First name must be at least 3 characters"]
        },
        lastName : {
            type : String,
            minlength : [3, "Last name must be at least 3 characters"]
        }
      },
      emailId : {
        type : String,
        required : true,
        unique : true,
        minlength : [7, "Email must be at least 3 characters"]
      },
      password : {
        type : String,
        required : true,
        select : false
      },
      socketId : {
        type : String
      }
});

userSchema.methods.getJWT = async function(){
    const user = this;
    const token = await jwt.sign({ _id : user._id }, process.env.JWT_SECRET_KEY)
    return token;
};

userSchema.methods.comparePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    );
    return isPasswordValid;
}

userSchema.statics.hashPassword = async function(passwordInputByUser){
    const hashPassword = await bcrypt.hash(passwordInputByUser, 10);
    return hashPassword;
};

const UserModel =  mongoose.model("user",userSchema);
module.exports = UserModel;