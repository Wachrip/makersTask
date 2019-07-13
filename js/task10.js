var evenArr = [];

for(var i = 0; i<100;i++){
    evenArr.push(i+1);
}

for(var i= 0; i<100; i++){
    if(i%2==0){
    console.log(evenArr[i+1]);
    }
}