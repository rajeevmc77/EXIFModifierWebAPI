var express = require('express');

var piexif = require("piexifjs");
var fs = require("fs");
const readExif = require('read-exif');
var dateFormat = require('dateformat');
var md5 = require('md5');
var formidable = require('formidable');

var appRoot = require('../basedir')

var router = express.Router();


async function saveJpegFromSchool(school_code, teamNumber) {
  
}

/* GET users listing. */
//http://localhost:3000/api/getJpegForSchool?schoolCode=11034&teamId=12
/* router.get('/', function(req, res, next) {

  createJpegForSchool(req.query.schoolCode, req.query.teamId).then((resp)=>{
    res.sendFile(resp); 
  });
  
}); */

//http://localhost:3000/api/getJpegForSchool/11034/12
/* router.get('/:schoolCode/:teamId', function(req, res, next) {
  saveJpegFromSchool(req.params.schoolCode, req.params.teamId).then((resp)=>{
    res.sendFile(resp);
  });
 
}); */

router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    res.write('File uploaded');
    res.end();
  });
 
});



module.exports = router;







