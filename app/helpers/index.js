exports.add = function (x, y) {
  return x + y;
}

exports.sub = function (x, y) {
  return x - y;
}

exports.mul = function ( x , y) {
  return x * y;
}

exports.div = function (x, y) {
  if(y != 0) {  
    res = x / y;
  } else {
    res = "Infinity";
  }   
  return res;
}

exports.concat = function (str1, str2) {
  return str1.concat(str2);
}

exports.find = function (firstStr, secondStr) {
  if (firstStr.indexOf(secondStr) > -1) {
    res = "Первая строка содержит вторую";
  } else {
    res = "Первая строка не содержит вторую";
    }  
  return res;  
}

exports.findCommonSymb = function (firstStr, secondStr) {
    let res = '';

    if (firstStr.length > secondStr.length) {
        endStr = secondStr.length;
    } else {
        endStr = firstStr.length;
    }
    
    for (i = 0; i < endStr; i++) {
        if (firstStr[i] === secondStr[i]) {
            res += firstStr[i];
        }
    }
    if (res === '') {
        res = "Нет общих символов";
    }
    return res;
}

