const getGlobbedFiles = require('../utils/getGlobbedFiles');
const path = require('path');
const helpers = require('./helpers');
const validators = require('./validators');
/* 
 Создаем массив для обработчиков, после этого передаем в функцию getGlFiles полный
 путь до текущей директории и путь до подключаемых файлов.
 Потом из каждого полученного файла подключаем обработчик и передаем ему функции.
 Дальше мы добавляем обработчик в словарь с ключем соответствующим имени файла.
 */
let builtHandlers = {};

getGlobbedFiles(path.join(__dirname, './handlers/*.js'))
  .forEach(path => {
    let handler = require(path)(helpers, validators);
    builtHandlers[handler.name] = handler;
  });
// Экспортируем подключенные обработчики
module.exports = builtHandlers;
