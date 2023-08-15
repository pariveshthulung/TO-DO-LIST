const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var lists = [];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){
    
    var today = new Date();
    var options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    }  ;

    var currentDay = today.toLocaleDateString("en-us",options);
    res.render("list",{
        dayOfWeek : currentDay,
        newItem :  lists  });
    
});

app.post("/",function(req,res){
    var list = req.body.activities;
    lists.push(list);

    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("the server is running in port 3000");
});