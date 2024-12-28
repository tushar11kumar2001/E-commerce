const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user-router");
const cookieParser = require("cookie-parser");
const captainRouter = require("./routes/captain-router");
const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/user",userRouter);
app.use("/captain",captainRouter);


 
app.use("/",(req, res)=>{
    res.send("hello world")
});


module.exports = app;
