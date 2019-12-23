module.exports = (helpers, validators) => {
  return function strHelp (req, res) {
    let operation = req.body.operation;

    let opResult = '';
    
    if (operation === 'concat') {
      opResult = helpers.concat.toString();
    }
    if (operation === 'find') {
        opResult = helpers.find.toString();
    }  
    if (operation === 'findCommon') {
        opResult = helpers.findCommonSymb.toString();
    }
    if (opResult === '') {
        opResult = 'Incorrect data.';
    }
    res.send(opResult.toString());
    res.end();
}
};
