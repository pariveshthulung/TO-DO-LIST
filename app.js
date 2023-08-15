const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let lists = ["buy food","cook food","eat food"];
let workLists = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
    
    let today = new Date();
    let options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    }  ;

    let currentDay = today.toLocaleDateString("en-us",options);
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

app.listen(3000,function(req,res){
    console.log("the server is running in port 3000");
});