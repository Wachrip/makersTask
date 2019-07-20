var fact = 5;

function factorial(num) {
    var factorial =1;
    if(num<=0) { 
        console.log("Input correct number");
        return;
    } else {
        for(var i=1; i<=num;i++) {
        factorial *= i;
        }
    }
    console.log(factorial);
}

factorial(fact);