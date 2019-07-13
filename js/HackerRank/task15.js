var arr = [1,2,3,4,5];

minMax(arr);


function minMax (arr){
    sortArr = arr.sort((a,b) => a-b);
    maxSum=0;
    minSum=0;
    for(var i=0; i<4; i++) {
        minSum+=sortArr[i];
        maxSum+=sortArr[i+1];
    }

    console.log(minSum);
    console.log(maxSum);
}

