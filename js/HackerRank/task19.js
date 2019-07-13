var number = 1041;

var test =numbers(number);
console.log(test);

function numbers(number) {
    var bo = number.toString(2);
    var stringNumber = bo.split("1");
    var maxLength = 0;

    stringNumber.sort();
    console.log(stringNumber);
    if(stringNumber[0].length == 0 && stringNumber[1].length ==0){
        maxLength = stringNumber[stringNumber.length-1].length;
        return maxLength;
    } else { return 0;}

}
