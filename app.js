const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const lists = ["buy food","cook food","eat food"];
const workLists = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
    
    var currentDay = date.getDate();
    res.render("list",{listTitle : currentDay,newItem: lists});
    
});

app.post("/",function(req,res){

    let item = req.body.activities;
    console.log(req.body);
    if(req.body.button === "work activities"){
        workLists.push(item);
        res.redirect("/work");
    }else{
        lists.push(item);
        res.redirect("/");
    }
    
});

app.get("/work",function(req,res){
    res.render("list",{listTitle: "work activities", newItem : workLists})
});

app.post("/work",function(req,res){
    let item = req.body.activities;
    workLists.push(item); 
    res.redirect("/work");
});

app.get("/aboutUs",function(req,res){
    res.render("about");
});

app.listen(3000,function(req,res){
    console.log("the server is running in port 3000");
});