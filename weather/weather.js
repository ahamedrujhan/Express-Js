const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))


app.get("/weather", function (req,res){
    res.sendFile(__dirname + "/weather.html");
})
app.post("/weather", function (req,res){
    var city = req.body.city;
    console.log(req.body.city)
    const apiKey="0677555aa3636ab3cbf9aec1a77920f6";
    var unit="metric";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function (data){
            const weatherData= JSON.parse(data);
            console.log(weatherData)
           if(response.statusCode ==200){
               const temp = weatherData.main.temp;
               const desc = weatherData.weather[0].description;
               const icType= weatherData.weather[0].icon;
               const icon = `https://openweathermap.org/img/wn/${icType}@2x.png`
               res.write(`<p><img src=${icon}></p>`)
               res.write(`<p>${city} is currently ${desc}</p>`)
               res.write(`<h2>Temparature in ${city} is ${temp} degree Celcius</h2>`)
               res.send()
           }
           else {
               res.send("Temparature is not Found")
           }
            // console.log(weatherData)

        })
    })


})

app.listen(3000, function (){
    console.log("Server Started at 3000");
})