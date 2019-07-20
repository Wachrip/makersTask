

function getTi() {
    var str = "";
    var timer = new Date();
    str+= `${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`;
    console.log(str);
}

 setInterval(getTi,1000);
// console.log(time);

// getTi();