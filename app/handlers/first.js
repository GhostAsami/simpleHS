let make = require('../helpers');
let validators = require('../validators');

// Калькулятор
exports.calc = function (req, res) {
  x = parseInt(req.params.param1);
  y = parseInt(req.query.param2);
  op = req.query.operation;

  var opResult = 0;

  switch(op) {
      case 'addition':
          opResult = make.add(x, y);
      break;
      case 'subtraction':
          opResult = make.sub(x, y);
      break;
      case 'multiplication':
          opResult = make.mul(x, y);
      break;
      case 'division':
          opResult = make.div(x, y);
      break;
      default:
      opResult = 'Incorrect data.';
}
res.send(opResult.toString());
res.end();
}

// Строковый манипулятор
exports.strManipulate = function (req, res) {
  firstStr = req.params.firstParam;
  secondStr = req.body.secondParam;
  operation = req.body.operation;

var opResult = '';
switch(operation) {
    case 'concat':
        opResult = make.concat(firstStr, secondStr);
        break;
    case 'find':
        opResult = make.find(firstStr, secondStr);
        break;
    case 'findCommon':
        opResult = make.findCommonSymb(firstStr, secondStr);            
        break;
    default:
        opResult = 'Incorrect data.';
}
res.send(opResult.toString());
res.end();
}