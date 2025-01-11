const mongoose = require('mongoose');

// register
const register = async (req,res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body
        if(!fullName || !userName || !password || !confirmPassword){
           return res.status(400).json({message : "All fields are required"})
        }
        if(fullName !== confirmPassword){
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
    } catch (error) {
        console.log(error)
    }
}