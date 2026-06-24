const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        requred: true
    },
    to : {
        type: String,
        requred: true
    },
    msg: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date,
        requred: true
    },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;