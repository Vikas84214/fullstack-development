const mongoose = require('mongoose');

main()
.then((res) =>{
    console.log("connection is success fully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongosh');
}

/*const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,

});*/
//const User = mongoose.model("User", userSchema);
//const User = mongoose.model("Book", bookSchema);


/*const Employee = mongoose.model("Employee", userSchema);
const user1 = new User({name: "Adam", email: "adam@yahoo.in", age: 48});
const user2 = new User({name: "Eve", email: "eve@yahoo.in", age: 48});
user1.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});*/

/*User.insertMany([
    {name: "Abhay", email: "adam@yahoo.in", age: 22},
    {name: "Eshika", email: "eshika@yahoo.in", age: 29},
    {name: "Aman", email: "aman@yahoo.in", age: 34},
    {name: "Alok", email: "alok@yahoo.in", age: 26}
])
.then((data) =>{
    console.log(data);
})
.catch((err) => {
    console.log(err)
});

User.findById("69e7a4ff445865de1ba1adb4")
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err)
});

User.updateOne({name: "Alok"}, {age: 88})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/

/*User.findByIdAndDelete('69e7a8cde0156c8b06d4402c')
.then((res) => {
    console.log(res);
});*/

// ✅ Define schema FIRST
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1, // ✅ correct type
    },
});


const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Math 12th",
    author: "RD Sharma",
    price: 1200
});
book1.save().then(res =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});