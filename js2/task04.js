var x = 3;
var y = 9;

function myRange(x,y) {
    var tempX =0;
    var tempY =0;
    if(x<y) {
        tempX = x;
        tempY = y;
    } else if(x>y) {
        tempX =y;
        tempY =x;
    } else { console.log("числа равны");}
    for(let i=tempX+1;i<tempY;i++) {
        console.log(i);
    }
}

myRange(2,10);