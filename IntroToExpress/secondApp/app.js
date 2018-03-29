var express = require("express");
var app = express();

//routing
app.get("/", function(req, res){
      res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalName", function(req, res){
      var sounds = {
            pig: "Oink",
            cow: "Moo",
            dog: "Woof Woof",
            fish: "....",
            goat: "Mhay"
      }
      var animal = req.params.animalName.toLowerCase();
      var sound = sounds[animal];
      res.send("The " + animal + " says "+ sound);
});

app.get("/repeat/:word/:times", function(req, res){
      var des = req.params.word;
      var num = Number(req.params.times);
      var result = "";
      for(var i = 0; i < num; i++){
            result += des  + " ";
      }
      res.send(result);
});

// got any route which doesnt exist gives it out
app.get("*", function(req, res){
      res.send("Sorry, page not found....What are you doing with your life?");
});

// Startin Server
app.listen(process.env.PORT, process.env.IP);
