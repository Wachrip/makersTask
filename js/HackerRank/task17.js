var arr =[1,2,3,4,5];
var num = 1;
var temp =0;

for(var i =0; i<num; i++) {
    temp=arr.shift();
    arr.push(temp);
}

console.log(arr);