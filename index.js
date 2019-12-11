const express = require('express')
const port = 333
const app = express()

app.get('/', (request, response) => {
    response.send("Привет от Express.")
    console.log("Получен запрос от " + request.hostname + " [" + request.ip + "]")
})

app.listen(port, (err) => {
    if (err) {
        return console.error('Что-то пошло не так.', err)
    }    console.log(`Сервер слушает порт ${port}`)
}) 
