let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let help = require('./app/handlers/first.help');
let first = require('./app/handlers/first');
let root = require('./app/handlers/general');

module.exports = app;

app.use(express.urlencoded({ extended: true }))

// General

app.get('/', root.main);

// Help

app.get('/api/v1/first/help', help.calc);
app.post('/api/v1/first/help', help.strManipulate);

// First

app.get('/api/v1/first/:param1', first.calc);
app.post('/api/v1/first/:firstParam', first.strManipulate);

app.listen(port, (err) => {
    if (err) {
        return console.error('Что-то пошло не так.', err);
    }    console.log(`Сервер слушает порт ${port}`);
}) 
