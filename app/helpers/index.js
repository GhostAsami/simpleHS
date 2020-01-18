const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');

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

function saveFile() {
  fs.mkdir('./uploads', function (err) {
    if (err && err.code !== 'EEXIST') {
      console.log(err.stack);
    } else {
      return './uploads';
    }
  })
}

function fileNameGen(fileName) {
  let split = '.';
  let finalName = '';
  let splitBeforeHash = '_';
  let randBytes = 10;

  let nameArr = fileName.split(split);
  let hash = crypto.randomBytes(randBytes).toString('hex');

  // Если файл без расширения
  if (nameArr.length === 1) {
    finalName = fileName + splitBeforeHash + hash;
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

  fileName = finalName.toString();
  exports.upfile = fileName;
  return fileName;
}

function makeStorage(file) {
  let storage;

  try {
    storage = multer.diskStorage({

      destination: saveFile(),

      filename: function (req, file, callback) {
        callback(null, fileNameGen(file.originalname))
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
