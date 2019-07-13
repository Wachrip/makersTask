var firstNum = +prompt("");
var secondNum = +prompt("");

var sum = firstNum + secondNum;
var razn = firstNum - secondNum;
var umn = firstNum * secondNum;
var razd = firstNum / secondNum;
 
console.log("Сложение : " + (firstNum+secondNum));
console.log("Вычитание : " + (firstNum-secondNum));
console.log("Умножение : " + (firstNum*secondNum));
console.log("Деление : " + (firstNum/secondNum)); 


alert(firstNum + " + " + secondNum + " =" + sum + "\r\n" + 
      firstNum + " - " + secondNum + " =" + razn + "\r\n" + 
      firstNum + " * " + secondNum + " =" + umn + "\r\n" + 
      firstNum + " / " + secondNum + " =" + razd + "\r\n");  