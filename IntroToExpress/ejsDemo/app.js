var express = require("express");
var app = express();

app.get("/", function(req, res){
      res.send("<h1>Hurrayyyyyyyy</h1>");
});
app.listen(process.env.PORT, process.env.IP);