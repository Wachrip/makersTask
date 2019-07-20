var words = ['ARGA','NORWAY','ENGLAND','GWALIOR'];
var crosswordVar = crossword();

function crossword() {
    return [
        ['+','-','+','+','+','+','+','+','+','+'], //0
        ['+','-','+','+','+','+','+','+','+','+'], //1
        ['+','-','-','-','-','-','-','-','+','+'], //2
        ['+','-','+','+','+','+','+','+','+','+'],//3
        ['+','-','+','+','+','+','+','+','+','+'],//4
        ['+','-','-','-','-','-','-','+','+','+'],//5
        ['+','-','+','+','+','-','+','+','+','+'],//6
        ['+','+','+','+','+','-','+','+','+','+'],//7
        ['+','+','+','+','+','-','+','+','+','+'],//8
        ['+','+','+','+','+','+','+','+','+','+']//9
       // 0   1   2   3   4   5   6   7   8   9
    ];
}
crossPuzzle(crosswordVar,words);
function crossPuzzle(crosswordVar,words) {
    var tempArr = crosswordVar;
    var tempWords = words;
    var countRow =0;
    var countCol =0;
    // var firstWordLength = tempWords[0].length;
    // var secondWordLength = tempWords[1].length;
    // var thirdWordLength = tempWords[2].length;
    // var fourthWordLength = tempWords[3].length;

    // console.log(firstWordLength);
    // console.log(secondWordLength);
    // console.log(thirdWordLength);
    // console.log(fourthWordLength);

    
    // console.log(tempWords[0][0]);
    for(var i=0; i<10;i++) {

        for(var j=0; j<10; j++) {

            if(tempArr[i][j] == "-"){

                if(tempArr[i][j+1] == "-"){
                    countRow++;
                }

            }

        }
        if(tempWords[i].length-1 == countRow) {
            
        }
        // console.log(countRow);
        // console.log("-------------------");
        console.log(countCol);
        countRow =0;
        countCol =0;
    }
}