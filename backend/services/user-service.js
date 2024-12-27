const UserModel = require("../models/user-schema");

module.exports.createUser = async ({
    firstName,
    lastName,
    emailId,
    password
})=>{
    
    if(!firstName || !emailId || !password){
        throw new Error("All fields are required");
    }
    const user =  new UserModel({
        fullName : {
        firstName,
        lastName
        },
        emailId,
        password
    }); 
    await user.save();
    return user;
}