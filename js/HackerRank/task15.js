var array = [1,2,3,4,5];

minMax(array);


function minMax (arr){
    sortArr = arr.sort((a,b) => a-b);
    maxSum=0;
    minSum=0;
    for(var i=0; i<array.length-1; i++) {
        minSum+=sortArr[i];
        maxSum+=sortArr[i+1];
    }

    console.log(minSum);
    console.log(maxSum);
}

