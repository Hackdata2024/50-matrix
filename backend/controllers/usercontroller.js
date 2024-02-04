const expressAsyncHandler = require("express-async-handler");
const User = require("../models/usermodel");
const sendToken = require("../utils/jsonwebtoken");



// REGISTER USER ---- TESTED

exports.registerUser = expressAsyncHandler(
    async (req, res) => {
        
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            
        });

        sendToken(user, 201, res);
    }
)

// LOGIN USER ---- TESTED

exports.loginUser = expressAsyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        console.log(email);
        console.log(password);

        if (!email || !password) {
            res.status(500).json({
                success: false,
                error: "Please provide an Email and Password!"
            })
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            res.status(500).json({
                success: false,
                error: "Invalid Credentials! Please try again."
            })
        }



        const ispasswordmatched = user.comparePass(password);

        if (!ispasswordmatched) {
            res.status(401).json({
                success: false,
                error: "Incorrect credentials provided!!"
            })
        }

        sendToken(user, 200, res);
    }
)

// LOGOUT USER ---- TESTED

exports.logoutUser = expressAsyncHandler(
    async (req, res, next) => {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "logged out"
        })
    }
)