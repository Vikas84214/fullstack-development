const express = require("express");
const app = express();
const path = require("path");

const port = 8020;

app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views"));

app.get("/", (req, res) =>{
    res.render("rolldice.ejs");
});

app.set("view engine", "ejs");

app.get("/hello", (req, res) =>{
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    res.render("rolldice.ejs")
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});