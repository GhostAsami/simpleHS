let make = require('../helpers');
let validators = require('../validators');

// Помощь по калькулятору
exports.calc = function (req, res) {
  res.send("По данному адресу работает калькулятор.");
  res.end();
}

// Помощь по строковому манипулятору
exports.strManipulate = function (req, res) {
  operation = req.body.operation;
  
  switch(operation){
  case 'concat':
    opResult = make.concat.toString();
    break;
  
  case 'find':
    opResult = make.find.toString();
    break;
  
  case 'findCommon':
    opResult = make.findCommonSymb.toString();
    break;
  
  default:
    opResult = 'Incorrect data.';
  }
    res.send(opResult.toString());  
    res.end();      
  } 
  