const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Vikas@9891"
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// inserting new data
connection.end();

app.get("/", (req, res) => {
  let q = `SELECT count (*) FROM user`;
  try{
connection.query(q, [data], (err, result) =>{
  if(err) throw err;
  console.log(result);
  res.render("home.ejs");

});
}catch(err){
  console.log(err);
  res.render("some error in database");

}
});

app.listen("8080", () => {
  console.log("server is listening port 8080");
});

