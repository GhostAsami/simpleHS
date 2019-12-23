module.exports = (helpers, validators) => {
  return function root (req, res) {
    res.status(200).end("You are on the root url");
  }
};