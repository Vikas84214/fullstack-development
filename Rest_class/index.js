const express = require("express");
const app = express();

const port = 8080;

const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
let posts = [{
    id : uuidv4(),
    username : "Vikas Verma",
    content : "I Love Coding"
},
{
    id : uuidv4(),
    username : "Harsh Verma",
    content : "I Love Money" 
},
{
    id : uuidv4(),
    username : "Urvil Verma",
    content : "I Love Gaming"
}
];
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new");
});
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({ username, content});
    res.redirect("posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show", {post});
});


app.listen(port, () => {
    console.log("listening to port : 8080");
});