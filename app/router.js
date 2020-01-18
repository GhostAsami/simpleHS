const handlers = require('./');

module.exports = (router) => {
  router.get('/', handlers.root);

  router.get('/api/v1/first/help', handlers.calcHelp);
  router.post('/api/v1/first/help', handlers.strHelp);

  router.get('/api/v1/first/:param1', handlers.calc);
  router.post('/api/v1/first/:firstParam', handlers.str);

  router.get('/api/uploadfile', handlers.uploadFileForm);
  router.post('/api/uploadfile', handlers.uploadFile);

};