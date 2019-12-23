let express = require('express');
let bodyParser= require('body-parser');

let app = express();
let port = process.env.PORT || 3000;

module.exports = app;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));


// General
require('./app/router')(app);

app.listen(port, (err) => {
    if (err) {
        return console.error('Что-то пошло не так.', err);
    }    console.log(`Сервер слушает порт ${port}`);
}) 
