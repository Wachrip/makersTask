let num = 5;

let arr = ['ab', 'bb' , 'hefg', 'dhck', 'dkhc'];

biggerIsGreater(arr);
function biggerIsGreater (arr) {
    let temp = arr;
    let num = temp.length-1;
    // let t = temp[0].split('');
    let tempF;
    let finishedArr=[];


    for(let i =num; i>=0; i--) {
        t = temp[i].split('');
        console.log(t);
        // if(t[t.length-1] > t[t.length-2]){
        //     tempF = t[t.length-1];
        //     t[t.length-1] = t[t.length-2];
        //     t[t.length-2] = tempF;
        // }
            if(t[i] > t[i-1]){
                tempF = t[i-1];
                t[i-1] = t[i];
                t[i] = tempF;
        }
        finishedArr[i] = t.join('');
    }
    console.log(finishedArr);
    // return finishedArr;
}