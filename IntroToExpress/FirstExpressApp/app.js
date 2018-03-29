var express = require("express");
var app = express();

// Routing
// Order of Route is very important
app.get("/", function(req, res){
      res.send("Hi There!!");
});

app.get("/bye", function(req, res){
      res.send("Good bye!!");
});

app.get("/dog", function(req, res){
      res.send("Bauh Bauh!!");
});
// Routing with patterns instead of exact match by using:
app.get("/a/:patternName", function(req, res){
      var pattern = req.params.patternName;
      res.send("Your looking for" + pattern);
});
// got any route which doesnt exist gives it out
app.get("*", function(req, res){
      res.send("Hahaha! unexisted url/route");
});

// Startin Server
app.listen(process.env.PORT, process.env.IP);