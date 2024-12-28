const jwt = require("jsonwebtoken");
const UserModel = require("../models/user-schema");
const BlacklistTokenModel = require("../models/blacklistToken-schema");
const CaptainModel = require("../models/captain-schema");


const authMiddleware = async (req, res, next)=>{
      
      const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
      if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
      };

      const isBlackListedToken = await BlacklistTokenModel.findOne({ token : token});
      if(isBlackListedToken){
        return res.status(401).json({
          message : "Unauthorized"
      })
      };
      
      try{
         const decodeMessage = await jwt.verify(token, process.env.JWT_SECRET_KEY);
         const { _id }  = decodeMessage;
         const user = await UserModel.findById(_id);
         if(!user){
            const captain = await CaptainModel.findById(_id);
            if(!captain){
              throw new Error("Unauthorized");
            }
            else{
              req.captain = captain;
              return next();
            }
            throw new Error("Unauthorized");
         }
         req.user = user;
         return next();
      }catch(err){
        return res.status(401).json({
            message : err.message
        })
      }
};

module.exports = authMiddleware;