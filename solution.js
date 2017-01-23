function numToRoman(num) {  
  var result = '';
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=numbers.length;i++) {
    while (num%numbers[i] < num) {   
      result += roman[i];
      num -= numbers[i];
     }
  }

  return result;
}

function romanToNum(str) {  
  var result = 0;
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=numbers.length;i++) {
    while (str.indexOf(roman[i]) === 0){
      result += numbers[i];
      //console.log(result);
      str = str.replace(roman[i],'');
      //console.log(str)
    }
  }
  return result;
}

function arithmaticHandler(first,operator,last){
  var result='';
  first=romanToNum(first);
  last=romanToNum(last);
  //console.log(first);
  result=eval(first+operator+last);
  result=numToRoman(result);
  return result;
}

console.log(arithmaticHandler('XL','+','X'));
console.log(arithmaticHandler('C','-','I'));
console.log(arithmaticHandler('C','/','X'));


 
