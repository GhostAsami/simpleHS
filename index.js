const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Привет от REST.");
    console.log("Получен запрос от " + req.hostname + " [" + req.ip + "]");
})

// Калькулятор
app.get('/api/v1/first/', (req, res) => {
    x = parseInt(req.query.param1);
    y = parseInt(req.query.param2);
    op = req.query.operation;

    var opResult = 0;

    switch(op) {
        case 'addition':
            opResult = add(x, y);
            break;
        case 'subtraction':
            opResult = sub(x, y);
            break;
        case 'multiplication':
            opResult = mul(x, y);
            break;
        case 'division':
            opResult = div(x, y);
            break;
        default:
            opResult = 'Incorrect data.';
    }
    res.send(opResult.toString() );
})

// Помощь по калькулятору
 app.get('/api/v1/first/help', (req, res) => {
    res.send("По данному адресу работает калькулятор.");
})

// Работа со строками
app.post('/api/v1/first/', (req, res) => {
    firstStr = req.body.firstParam;
    secondStr = req.body.secondParam;
    operation = req.body.operation;

    var opResult = '';

    switch(operation) {
        case 'concat':
            opResult = firstStr.concat(secondStr);
            break;
        case 'find':
            if (firstStr.indexOf(secondStr) > -1) {
                opResult = "Первая строка содержит вторую";
            } else {
                opResult = "Первая строка не содержит вторую";
            }
            break;
        case 'findCommon':
            endStr = 0;
            if (firstStr.length > secondStr.length) {
                endStr = secondStr.length;
            } else {
                endStr = firstStr.length;
            }
            
            for (i = 0; i < endStr; i++) {
                if (firstStr[i] === secondStr[i]) {
                    opResult += firstStr[i];
                }
            }
            if (opResult === '') {
                opResult = "Нет общих символов";
            }
            break;
        default:
            opResult = 'Incorrect data.';
    }
    res.send( opResult.toString() );
})

// Возвращает код выбранной функции
app.post('/api/v1/first/help', (req, res) => {
    operation = req.body.operation;
    
    switch(operation){
      case 'concat':
        opResult = `opResult = firstStr.concat(secondStr);`;
        break;

      case 'find':
        opResult =
        `if (firstStr.indexOf(secondStr) > -1) {
        opResult = "Первая строка содержит вторую";
        } else opResult = "Первая строка не содержит вторую";`;
        break;

      case 'findCommon':
        opResult = 
        `endStr = 0;
        if (firstStr.length > secondStr.length) {
        endStr = secondStr.length;
        } else {
            endStr = firstStr.length;
        }
        
        for (i = 0; i < endStr; i++) {
            if (firstStr[i] === secondStr[i]) {
                opResult += firstStr[i];
            }
        }
        if (opResult === '') {
             opResult = "Нет общих символов";
        }`;
        break;

      default:
        opResult = 'Incorrect data.';
    }
        res.send( opResult.toString() );        
})

// PORT
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        return console.error('Что-то пошло не так.', err);
    }    console.log(`Сервер слушает порт ${port}`);
}) 

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul( x , y) {
  return x * y;
}

function div(x, y) {
  if(y != 0) {  
    res = x / y;
  } else {
    res = "Infinity";
  }   
  return res;
}