module.exports = (helpers, validators) => {
  return function calc (req, res) {
    let x = parseInt(req.params.param1);
    let y = parseInt(req.query.param2);
    let op = req.query.operation;
  
    let opResult = '';
  
      if (op === 'addition') {
        opResult = helpers.add(x, y);
      }
      if (op === 'subtraction') {
        opResult = helpers.sub(x, y);
      }
      if (op === 'multiplication') {
        opResult = helpers.mul(x, y);
      }
      if (op === 'division') {
        opResult = helpers.div(x, y);
      }
      if (opResult === '') {
        opResult = 'Incorrect data.';
    }
    res.send(opResult.toString());
    res.end();
  }
};
