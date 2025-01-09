const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var messageModel = new mongoose.Schema({
   senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
   },
   recieverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
   },
   message:{
        type:String,
        required:true
   }
});

//Export the model
module.exports = mongoose.model('Message', messageModel);