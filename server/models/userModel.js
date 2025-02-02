const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userModel = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default: null
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    },
},{timestamps:true});

//Export the model
module.exports = mongoose.model('User', userModel);