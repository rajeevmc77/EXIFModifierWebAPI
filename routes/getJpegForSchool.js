var express = require('express');

var piexif = require("piexifjs");
var fs = require("fs");
const readExif = require('read-exif');
var dateFormat = require('dateformat');
var md5 = require('md5');

var appRoot = require('../basedir')

var router = express.Router();


async function createJpegForSchool(school_code, teamNumber) {
  var sourceFile = appRoot +"/imgSrc/myImage.jpg", targetFile =appRoot + "/imgTrgt/" + school_code+'-'+teamNumber+".jpg", 
                  programeName = 'LK2019MassPainting', imageDescription ='LK Painting Program 2019' ;
  var data = fs.readFileSync(sourceFile).toString("binary");
  var datetimenow=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"); 

  const exifData = (await readExif(sourceFile));  

  exifData["0th"][piexif.ImageIFD.Artist] = school_code+'-'+teamNumber;
  exifData["0th"][piexif.ImageIFD.Software] = programeName; 
  var msg = md5(school_code + programeName + datetimenow );

  exifData["0th"][piexif.ImageIFD.ImageDescription] = imageDescription + ' - ' + msg;  

  var exifbytes = piexif.dump(exifData);
  var newData = piexif.insert(exifbytes, data);
  var newJpeg = Buffer.from(newData, "binary");

  fs.writeFileSync(targetFile, newJpeg);
  return targetFile;
}

/* GET users listing. */
//http://localhost:3000/api/getJpegForSchool?schoolCode=11034&teamId=12
router.get('/', function(req, res, next) {

  createJpegForSchool(req.query.schoolCode, req.query.teamId).then((resp)=>{
    res.sendFile(resp); 
  });
  
});

//http://localhost:3000/api/getJpegForSchool/11034/12
router.get('/:schoolCode/:teamId', function(req, res, next) {
  createJpegForSchool(req.params.schoolCode, req.params.teamId).then((resp)=>{
    res.sendFile(resp);
  });
 
});



module.exports = router;







