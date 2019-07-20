function getTi() {
    var str = "";
    var timer = new Date();
    var hours = timer.getHours();
    var minutes = timer.getMinutes();
    var seconds = timer.getSeconds();
    if(hours<10) hours="0"+timer.getHours();
    if(minutes<10) minutes="0"+timer.getMinutes();
    if(seconds<10) seconds="0"+timer.getSeconds();
    str+= `${hours}:${minutes}:${seconds}`;
    console.log(str);
}

 setInterval(getTi,1000);

