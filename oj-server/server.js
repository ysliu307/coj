var express = require('express');
var app = express();
var restRouter = require("./routes/rest");
var mongoose = require("mongoose");

mongoose.connect("mongodb://user:user@ds111204.mlab.com:11204/problems");

app.use('/api/v1', restRouter);

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
