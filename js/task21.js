var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];
var sum = [];

var biggest = 0;


if(array1.length>array2.length) {
    biggest=array1.length;
} else { biggest = array2.length;}

for(var i =0; i<biggest; i++) {
    if(isNaN(array1[i])) {
        array1[i] =0;
    } else if(isNaN(array2[i])) {
        array2[i] =0;
    }
    sum[i]= array1[i] + array2[i];
}

console.log(sum);