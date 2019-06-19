var express = require("express");
var app = express();
var restRouter = require('./routes/rest');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb+srv://User:user@collaborativeonlinejudge-9g5ni.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true});
// attention __dirname has two underlines
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.listen(3000,function(){
    console.log('Example app listening on port 3000')
});
