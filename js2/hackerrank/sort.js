var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

sortik(arr);

function sortik(array) {
    var sortingArr = array;
    var nums = sortingArr.length;

    if(nums < 2 || sortingArr[nums -2] < sortingArr[nums-1]) {
        return;
    }

    var temp = sortingArr[nums-1];

    for(var i = nums-2; i >= 0 && sortingArr[i] > temp ; i--){
        // console.log(i);
        sortingArr[i+1] = sortingArr[i];
        console.log(sortingArr.join(" "));
    }
    sortingArr[i+1] = temp;
    console.log(sortingArr.join(" "));
}