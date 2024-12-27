const mongoose = require("mongoose");

const connectToDatabase =  async ()=>{
     await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
};

module.exports = connectToDatabase;