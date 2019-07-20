var n = 3;
var x = 100;

bigPow(x,n);

function bigPow(X,N) {
    var count =0;
    for(var i =0; i<=X; i++){
        var temp =0;
        for(var j =0;j<=X; j++) {
            // console.log(temp);
            temp=(Math.pow(i,N)) + (Math.pow(j,N));
            // console.log(Math.pow(i,N) , Math.pow(j,N));
            console.log(temp);
            if(temp==X) {
                count++;
                console.log("worked");
            }
        }
    }
    console.log(count);
}