const Conversation = require('../models/conversationModel');
const Message = require('../models/messageModel');
const { getReceiverSocketId, io } = require('../socket/socket');

exports.sendMessage = async (req,res) => {
    try {
    const senderId = req.id;
    const receiverId = req.params.id;
    console.log(receiverId)
    const {message} = req.body;

    let getConversation = await Conversation.findOne({
        participants : {$all : [senderId, receiverId]}
    });

    if(!getConversation){
        getConversation = await Conversation.create({
            participants : [senderId, receiverId]
        })
    }
    const newMessage = await Message.create({
        senderId,
        receiverId,
        message
    });
    if(newMessage){
        getConversation.messages.push(newMessage._id);
    }
    await getConversation.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    console.log('receiverId',receiverSocketId)
    if(receiverSocketId){
        io.to(receiverSocketId).emit('newMessage', newMessage);
    };

    return res.status(201).json(newMessage);

    } catch (error) {
        console.log(error);
    }
}

exports.getMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const conversation = await Conversation.findOne({
            participants: {$all : [senderId, receiverId]}
        }).populate("messages");

        // Check if the conversation exists
        if (!conversation) {
            return res.status(200).json({
                message: "No conversation found between these participants."
            });
        }

        return res.status(201).json(
            conversation.messages
        )

    } catch (error) {
        console.log(error)
    }
}
