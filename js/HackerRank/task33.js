var A = [4,3,2,1,5];
var B = [0,1,0,0,0];

for(var i =0;i<A.length;i++) {
    if(B[i]==1 && B[i+1]==0){       
        if(A[i]>A[i+1]){
            A.splice(i+1,1);
            B.splice(i+1,1);
            if(i>2){
                i-=2;
            } else i=0;
        } else {
            A.splice(i,1);
            B.splice(i,1);
            if(i>2){
                i-=2;
            } else i=0;
        }
    } else continue;
}

console.log(A.length);
// return A.length;






































// var A = [4,3,2,1,5];
// var B = [0,1,0,0,0];

// for(var i =0;i<A.length;i++) {
//     if(B[i]==1 && B[i+1]==0){       
//         if(A[i]>A[i+1]){
//             A.splice(i+1,1);
//             B.splice(i+1,1);
//             i-=2;
//         } else {
//             A.splice(i,1);
//             B.splice(i,1);
//             i-=2;
//         }
//     } else continue;
// }

// return A.length;