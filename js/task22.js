var arr = [1,2,3,4];
var sum = 0;

console.log(arr[0]);

for(var i =0;i<arr.length;i++) {
   sum+= square(arr[i]);
}


function square(arr) {
    return arr * arr;
}

console.log(sum);