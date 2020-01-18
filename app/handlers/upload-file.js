module.exports = (helpers, validators) => {
  return function uploadFile(req, res) {
    helpers.upload(req, res, function (err) {
      if (err) {
        console.log(err.stack);
        return res.end("Error uploading file.");
      }
      else if (helpers.upfile !== null) {
        res.json({ fileName: helpers.upfile.toString() });
      }
      helpers.upfile = null;
    });
  }
};
