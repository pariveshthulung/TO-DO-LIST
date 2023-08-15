const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let lists = ["buy food","cook food","eat food"];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){
    
    let today = new Date();
    let options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    }  ;

    let currentDay = today.toLocaleDateString("en-us",options);
    res.render("list",{dayOfWeek : currentDay,newItem: lists});
    
});

app.post("/",function(req,res){
    let list = req.body.activities;
    lists.push(list);

    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("the server is running in port 3000");
});