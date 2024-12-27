const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user-routes")
const app = express();


app.use(cors());
app.use(express.json());


app.use("/user",userRouter);
app.use("/",(req, res)=>{
    res.send("hello world")
});


module.exports = app;
