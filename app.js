const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mysql = require("mysql");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();

const db = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "crudDB"
});


//connect to database
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//configure middleware
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());// configure fileupload
app.use(bodyParser.json());// parse form data client


app.listen(3000,function(){
  console.log("Server is running");
});
