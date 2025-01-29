const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Register function
exports.register = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (!fullName || !userName || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "Profile picture is required" });
        }        

        const hashedPassword = await bcrypt.hash(password, 10);

        // Handle file upload
        const profilePic = req.file ? `/uploads/${req.file.filename}` : null;

        // Create user
        await User.create({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic
        });

        return res.status(201).json({
            message: "Account Created Successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Login function
exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Check if user exists
        const userInfo = await User.findOne({ userName });
        if (!userInfo) {
            return res.status(404).json({ message: "Invalid username or password" });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, userInfo.password);
        if (!isPasswordMatch) {
            return res.status(404).json({ message: "Invalid username or password" });
        }

        // Create JWT Token
        const tokenData = { userId: userInfo._id };
        const token = jwt.sign(tokenData, process.env.SECRET_JWT_KEY, { expiresIn: "1d" });

        return res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true,
            sameSite: "strict"
        }).json({
            id: userInfo._id,
            fullName: userInfo.fullName,
            userName: userInfo.userName,
            profilePic: userInfo.profilePic  // Send profilePic in the response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Logout function
exports.logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logout Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get other users (excluding the logged-in user)
exports.getOtherUser = async (req, res) => {
    try {
        const loggedInUser = req.id;  // assuming `req.id` is set by your `isAuthenticated` middleware
        const otherUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        return res.status(200).json(otherUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
