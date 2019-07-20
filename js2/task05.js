var f=0;
function fibonaci(num1,num2) {
    if(num2 < 100){
            f+=num1;
        console.log(f);
        return fibonaci(num2,f);
    } else return;
}

fibonaci(0,1);
