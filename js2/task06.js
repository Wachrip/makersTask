function getTi() {
    var str = "";
    var timer = new Date();
    var hours = timer.getHours();
    var minutes = timer.getMinutes();
    var seconds = timer.getSeconds();
    if(hours < 10 && minutes<10 && seconds<10)
    str+= `0${timer.getHours()}:0${timer.getMinutes()}:0${timer.getSeconds()}`;
    else if(minutes < 10 && seconds<10)
    str+= `${timer.getHours()}:0${timer.getMinutes()}:0${timer.getSeconds()}`;
    else if(seconds<10) {
    str+= `${timer.getHours()}:${timer.getMinutes()}:0${timer.getSeconds()}`;
    }
    else {
    str+= `${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`;
    }
    console.log(str);
}

 setInterval(getTi,1000);

