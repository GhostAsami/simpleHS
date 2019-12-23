module.exports = (helpers, validators) => {
  return function calcHelp (req, res) {
      res.status(200).end("Calculator works at this address.");
    }
};
