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
app.use(express.static(__dirname + '/public'));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());// configure fileupload
app.use(bodyParser.json());// parse form data client

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/",function(req,res){
  let query = "SELECT * FROM `players` ORDER BY id ASC";
  db.query(query,function(err,result){
    if(err){
      res.redirect("/");
    }else{
      res.render("index",{players:result});
    }
  });
});

app.post("/",function(req,res){
  console.log(req.body);
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const UserName = req.body.username;
  const number = req.body.number;
  const position = req.body.position;
  const image = req.body.image;

  let query = "INSERT INTO `players` (`id`, `first_name`, `last_name`, `position`, `number`, `image`, `user_name`) VALUES (NULL, '"+firstName+"', '"+lastName+"', '"+position+"', '"+number+"', '"+image+"', '"+UserName+"')";
  db.query(query,function(err,result){
    if(err){
      return res.status(500).send(err);
    }else{
      res.redirect("/");
    }
  });
});



///////////////////////////////////////////////////////////////////////////////////////////////






app.get("/add-player",function(req,res){
  res.render("add-player");
});







//////////////////////////////////////////////////////////////////////////////////////////////








app.get("/edit-player/:id",function(req,res){
  const playerId = req.params.id;
  let query = "SELECT * FROM `players` WHERE id = '" + playerId + "' ";

  db.query(query,function(err,result){
    console.log(result);
    if(err){
      return res.status(500).send(err);
    }else{
      res.render("edit-player",{player : result[0]});
    }
  });

});

app.get("/delete/:id",function(req,res){
  const playerId = req.params.id;

  let query = "DELETE FROM `players` WHERE `players`.`id` = "+playerId+"";

  db.query(query,function(err,result){
    if(err){
      return res.status(500).send(err)
    }else{
      res.redirect("/");
    }
  });
});




app.listen(3000,function(){
  console.log("Server is running");
});
