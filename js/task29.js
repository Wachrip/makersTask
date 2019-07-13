function notRepeated(input) {
    var splitedInput = input.split("");
    var result = '';
    var counter =0;

    for(var i =0; i<splitedInput.length;i++) {
        counter =0;

        for(var j = 0;j<splitedInput.length;j++) {

            if(splitedInput[i] == splitedInput[j]) {
                counter++;
            }
         }

  if(counter<2) {
    result = splitedInput[i];
    break;
    }
   }
   return result;
} 
console.log(notRepeated('abacddbec'));

