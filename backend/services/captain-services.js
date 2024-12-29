const CaptainModel = require("../models/captain-schema");

module.exports.createCaptain = async ({
    firstName,
    lastName,
    emailId,
    password,
    color,
    plate,
    capacity,
    type
}) => {
    if(!firstName  || !emailId || !password || !color || !plate || !capacity || !type){
        throw new Error("All fields are required");
    }
    const captain = await CaptainModel.create({
        fullName: {
            firstName,
            lastName,
        },
        emailId,
        password,
        vechicle: {
            color,
            plate,
            capacity,
            type,
        },
    });

    return captain;
}