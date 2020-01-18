module.exports = (helpers, validators) => {
  return function uploadFileForm(req, res) {
    res.end(`
  <head>
  <meta charset="UTF-8">
  </head>  
  <form id        =  "uploadForm"
     enctype   =  "multipart/form-data"
     action    =  "/api/uploadfile"
     method    =  "post"
  >
  <input type="file" name="userFile" />
  <input type="submit" value="Upload File" name="submit">
  </form>
  `);
  };
}