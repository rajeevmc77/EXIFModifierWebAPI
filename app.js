var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var getJpegForSchool = require('./routes/getJpegForSchool');

var uploadImageFromSchool = require('./routes/uploadImageFromSchool'); 

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// app.use('/api/v1/users', users);
app.use('/api/getJpegForSchool',getJpegForSchool);
app.use('/api/uploadImageFromSchool',uploadImageFromSchool);

module.exports = app;
