function countingValleys(n, s) {

    var arrOfChars = s.split("");

    var num = 0;
    var valNum = 0;
    var numArr = [];

    for (var i = 0; i < n; i++) {

        if (arrOfChars[i] == "D") {
            num--;
            numArr.push(num);
        } else if (arrOfChars[i] == "U") {
            num++;
            numArr.push(num);
        } if (num == 0 && numArr[i - 1] < 0) {
            valNum++;
        }
    }

    return valNum;

}
