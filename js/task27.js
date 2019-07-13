var inputArr = "the quick brown fox";
var splitedArr = inputArr.split(" ");

for(var i=0;i<splitedArr.length;i++) {
    splitedArr[i] = splitedArr[i].charAt(0).toUpperCase() + splitedArr[i].slice(1);
}

inputArr=splitedArr.join(" ");
console.log(inputArr);
