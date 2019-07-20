
let arr = [2,1,5,1,2,2,2];
let M = 5;
let K = 3;

function test(arr,M) {
    let inArr = arr;
    let flag = true;
    for(let i =0; i< inArr.length;i++) {
        if(inArr[i] > M) {
            flag = false;
            break;
        } else {
            flag = true;
        }
    }
    return flag;
}

let flag = test(arr,M);
console.log(flag);

function creatingArrs(flag) {
    let count = 0;
    if(flag) {
        let numsOfArr = K;
        var createdArr = new Array();
        for(let i =0; i<numsOfArr; i++) {
            createdArr[i] = new Array(); 
            count++;
        }   
    }
    console.log(`${count} arrays created`);
    return createdArr;
}
let createdArrs = creatingArrs(flag);

function compareArrs(arr,createdArrs) {
    for(let i =0; i<arr.length; i++) {
        
    }
}