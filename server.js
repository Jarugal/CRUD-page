console.log("May Node be with you");
const express = require("express");
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World')
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(3000, function() {
    console.log("listening on 3000")
  });