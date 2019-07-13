var arr = [];

for(var i = 0; i<100;i++){
    arr.push(i+1);
}

for(var i= 0; i<100; i++){
    if(arr[i]%3==0 && arr[i]%5==0){
        arr[i] = "fizzbuzz";
    }
    if(arr[i]%3==0){
        arr[i] = "fizz";
    }
    if(arr[i]%5==0){
        arr[i] = "buzz";
    }

}

for(var i= 0; i<100; i++){
    console.log(arr[i]);
}