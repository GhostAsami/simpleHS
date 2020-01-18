const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
var iconv = require('iconv-lite');

exports.add = function (x, y) {
  return x + y;
}

exports.sub = function (x, y) {
  return x - y;
}

exports.mul = function (x, y) {
  return x * y;
}

exports.div = function (x, y) {
  if (y != 0) {
    res = x / y;
  } else {
    res = "Infinity";
  }
  return res;
}

exports.concat = function (str1, str2) {
  return str1.concat(str2);
}

exports.find = function (firstStr, secondStr) {
  if (firstStr.indexOf(secondStr) > -1) {
    res = "Первая строка содержит вторую";
  } else {
    res = "Первая строка не содержит вторую";
  }
  return res;
}

exports.findCommonSymb = function (firstStr, secondStr) {
  let res = '';

  if (firstStr.length > secondStr.length) {
    endStr = secondStr.length;
  } else {
    endStr = firstStr.length;
  }

  for (i = 0; i < endStr; i++) {
    if (firstStr[i] === secondStr[i]) {
      res += firstStr[i];
    }
  }
  if (res === '') {
    res = "Нет общих символов";
  }
  return res;
}

function makeStorage(file) {
  let storage;

  try {
    storage = multer.diskStorage({

      destination: function (req, file, callback) {
        fs.mkdir('./uploads', function (err) {
          if (err && err.code !== 'EEXIST') {
            console.log(err.stack);
          } else {
            callback(null, './uploads');
          }
        })
      },

      filename: function (req, file, callback) {
        (function () {
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
            for (i = 1; i < nameArr.length; i++) {
              if (i === nameArr.length - 1) {
                finalName += splitBeforeHash + hash + split + nameArr[i];
              } else {
                finalName += split + nameArr[i];
              }
            }
          }

          file.originalname = finalName.toString();
          exports.upfile = file.originalname;
        })(),
          callback(null, file.originalname)
      }
    });
  } catch (err) { console.log(err.stack); }
  return storage;
}

exports.upload = function (req, file, cb) {
  let storage = makeStorage(file);
  let upload = multer({ storage: storage }).single('userFile');
  return upload(req, file, cb);
}
