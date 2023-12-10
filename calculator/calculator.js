const express = require("express");
const bodyPaser=require("body-parser");


let app= express();
app.use(bodyPaser.urlencoded({extended:true}));


app.get("/", function (req,res){
    // console.log(__dirname);
res.sendFile(__dirname+ "/index.html")
})

app.post("/", function (req,res) {
    var num1 = + req.body.num1;
    var num2 = + req.body.num2;

    var result = num1 + num2;

    res.send(`Result of the calculation is ${num1} + ${num2} = ${result}`)

})

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
    console.log("Server Started at 3000")
})