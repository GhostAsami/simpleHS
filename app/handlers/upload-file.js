const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');

var upfile = '';
try {
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    fs.mkdir('./uploads', function(err) {
      if(err && err.code !== 'EEXIST') {
          console.log(err.stack);
      } else {
          callback(null, './uploads');
      }  
  })},
  filename: function (req, file, callback) {
    (function(){
      let split = '.';
      let finalName = '';
      let splitBeforeHash = '_';
      let randBytes = 10;

      let nameArr = file.originalname.split(split);
      let hash = crypto.randomBytes(randBytes).toString('hex');
      
      // Если файл без расширения
      if (nameArr.length === 1) {
        finalName = file.originalname + splitBeforeHash + hash;
      }

      // Если файл с расширением
      if (nameArr.length > 1) {
          finalName = nameArr[0];
      for (i = 1; i < nameArr.length; i++)
      {
        if (i === nameArr.length-1) {
        finalName += splitBeforeHash + hash + split + nameArr[i];
        } else {    
        finalName += split + nameArr[i]; 
        }    
      }
    }

    file.originalname = finalName.toString();
    upfile = file.originalname;
})(),
    callback(null, file.originalname);
}});
} catch (err) {console.log(err.stack);}

var upload = multer({ storage : storage}).single('userFile');

module.exports = (helpers, validators) =>  {
  return function uploadFile (req, res, next) {
      upload(req,res,function(err) {
          if(err) {
              console.log(err.stack);
              return res.end("Error uploading file.");
          }
          else if (upfile !== null) {
          res.json({fileName: upfile.toString()});
          }
          upfile = null;
      });
}};
