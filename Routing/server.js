const express = require("express");
let app = express();

app.get("/", function (request, response){
   response.send("<h1>Hello!</h1>")
})
app.get("/about", function (req, res){
    res.send("<p>Hey This is our about page</p>")
})
app.get("/hobbies",function(req,res){
    res.send("<h2>My Hobbies are: </h2><ul><li>Cricket</li><li>Vollyball</li><li>Listning Music</li><li>Gardening</li></ul>")
})
app.listen(3000, function (){
    console.log("Server started : 3000");
});
