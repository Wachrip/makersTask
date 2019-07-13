var namesArr = ["Sam", "Joe", "sam", "Jim", "Jane"];

for(var i =0; i<namesArr.length;i++) {

    for(var j = i+1; j<namesArr.length; j++) {

        namesArr[j] = namesArr[j].toLowerCase();
        namesArr[i] = namesArr[i].toLowerCase();

            if(namesArr[i] == namesArr[j]) {
            namesArr.splice(j,1);
        }
    }

    namesArr[i] = namesArr[i].charAt(0).toUpperCase()+namesArr[i].slice(1);
}



console.log(namesArr);