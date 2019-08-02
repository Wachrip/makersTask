// let arr = ['(','(',')','(','(',')',')','(',')',')'];
let arr = '(()(())())';

let result = solution(arr);

console.log(result);

function solution (s) {
    let workingArr = s.split('');

    for(let i = 0; i< workingArr.length; i++) {
        if(workingArr[i] == '(') {
            if(workingArr[i+1] == ')') {
                workingArr.splice(i,2);
                i=(-1);
            } else {
                continue;
            }
        }
    }
    if(workingArr.length>0) {
        return 0;
    } else return 1;
}

