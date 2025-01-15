const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// register
const register = async (req,res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body
        if(!fullName || !userName || !password || !confirmPassword){
           return res.status(400).json({message : "All fields are required"})
        }
        if(password !== confirmPassword){
           return res.status(400).json({message : "Password do not match"})
        }
        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({message: "User Already Exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        
        await User.create({
            fullName,
            userName,
            password : hashedPassword,
            gender
        });

        return res.status(201).json({
            message: "Account Created Successfully",
            success : true
        })

    } catch (error) {
        console.log(error)
    }
}

// login
const login = async (req,res) => {
    try {
        const {userName, password} = req.body
        const userInfo = await User.findOne({userName})
        if(!userInfo){
            res.status(201).json({message: "Invalid username or password"})
        }
        const isPasswordMatch = await bcrypt.compare(password, userInfo.password);
        if(!isPasswordMatch){
            res.status(201).json({message: "Invalid username or password"})
        }
        const tokenData = {
            userId : userInfo._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_JWT_KEY, {expiresIn:"1d"})
        return res.status(200).cookie("token", token, {maxAge : 1*24*60*60*1000, httpOnly: true, sameSite: "strict"}).json({
            id: userInfo._id,
            fullName: userInfo.fullName,
            userName : userInfo.userName,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = (register, login)