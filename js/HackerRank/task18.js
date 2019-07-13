var s = "AAABBB";
var count = 0;

for(var i =0; i< s.length; i++) { 
    var arrOfChars = s.split("");
        if(arrOfChars[i] == arrOfChars[i-1]) {
            arrOfChars.splice(i,1);
            count++;
         }
 }

 console.log(count);

