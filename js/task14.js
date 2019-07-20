var enterStr = "dog";

var result = [];
for (i=0; i<enterStr.length;i++){
    for (j=i+1;j<enterStr.length+1;j++){
        result.push(enterStr.slice(i,j));
    }
}

console.log(result);