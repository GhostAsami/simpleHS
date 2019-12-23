module.exports = (helpers, validators) => {
  return function str (req, res) {
    let firstStr = req.params.firstParam;
    let secondStr = req.body.secondParam;
    let operation = req.body.operation;
  
    let opResult = '';

    if (operation === 'concat') {
      opResult = helpers.concat(firstStr, secondStr);
    }
    if (operation === 'find') {
        opResult = helpers.find(firstStr, secondStr);
    }  
    if (operation === 'findCommon') {
        opResult = helpers.findCommonSymb(firstStr, secondStr);
    }
    if (opResult === '') {
        opResult = 'Incorrect data.';
    }
    res.send(opResult.toString());
    res.end();
  }
};
