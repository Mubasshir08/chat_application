const mongoose = require('mongoose');
const register = async (req,res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body
        if(!fullName || !userName || !password || !confirmPassword){
            res.status(400).json({message : "All fields are required"})
        }
        if(fullName !== confirmPassword){
            res.status(400).json({message : "Password do not match"})
        }
    } catch (error) {
        console.log(error)
    }
}