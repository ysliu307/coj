var express = require('express');
var app = express();
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://user:user@ds111204.mlab.com:11204/problems");
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
