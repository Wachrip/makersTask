var inputArr = '{(([])[])[]]}';
var splitedArr = inputArr.split("");
for(var i =0;i<inputArr.length;i++) {
    if(splitedArr[i]=='{') {
        if(splitedArr[i+1] == '}') {
            splitedArr.splice(i,2);
            i=(-1);
        }
    } else if(splitedArr[i] == '(') {
        if(splitedArr[i+1] == ')') {
            splitedArr.splice(i,2);
            i=(-1);
        }
    } else if(splitedArr[i] == '['){
        if(splitedArr[i+1] == ']'){
            splitedArr.splice(i,2);
            i=(-1);
        }
    }
    console.log(splitedArr);
}

if(splitedArr.length == 0){
    return "YES";
} else {
    return "NO";
}