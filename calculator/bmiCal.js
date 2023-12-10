const express = require("express");
const bodyPasser= require("body-parser");

const app=express();
app.use(bodyPasser.urlencoded({extended:true}))

//bmi calculator routes

app.get("/bmicalculator", function (req,res){
    res.sendFile(__dirname + "/bmiCalc.html");
})

app.post("/bmicalculator", function (req, res){
    var height = + req.body.height;
    var weight = + req.body.weight;
    var bmi = weight/(height*height);

    res.send(`<h2>Your BMI is ${bmi} </h2>`)
})

app.listen(3000, function (){
    console.log("Server started at 3000")
})

