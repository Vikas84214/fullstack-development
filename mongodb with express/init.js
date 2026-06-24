const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection is success full");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
     {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date()
},
{
    from: "Aman",
    to: "Anshu",
    msg: "send me your notes",
    created_at: new Date()

},
{
    from: "Abhishek",
    to: "Anshika",
    msg: "send me your javascript sheet",
    created_at: new Date()
},
{
    from: "kiran",
    to: "ko mal",
    msg: "send me your exam result",
    created_at: new Date()
},
];

Chat.insertMany(allChats);