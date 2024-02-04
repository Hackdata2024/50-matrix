const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

exports.isAuthenticated = expressAsyncHandler(
    async(req,res,next) =>{
        
        const { token } = req.cookies;
        
        if(!token){
            res.status(401).json({
                success : false,
                error : "Please login to access"
            })
        }

        const decodedData = jwt.verify(token , process.env.JWT_SECRET);

        req.user = await User.findById(decodedData.id);

        next();
        
    }
) 