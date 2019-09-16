var express = require('express');

var piexif = require("piexifjs");
var fs = require("fs");
const readExif = require('read-exif');
var dateFormat = require('dateformat');
var md5 = require('md5');
var formidable = require('formidable');

var fs = require('fs');

var appRoot = require('../basedir')

var router = express.Router();


async function saveJpegFromSchool(school_code, teamNumber) {
  
}

router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.imgFromSchool.path;
    var newpath = appRoot+ '/uploads/' + files.imgFromSchool.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
      res.end();
    });   
  });
 
});



module.exports = router;







