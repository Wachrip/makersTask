
let K = 3;
let M = 5;
let A = [2,1,5,1,2,2,2];



     function solution(K,M,A) {

        // main idea:
        // The goal is to find the "minimal large sum"
        // We use "binary search" to find it (so, it can be fast)
        
        // We assume that the "min max Sum" will be 
        // between "min" and "max", ecah time we try "mid"
        
        let minSum =0;
        let maxSum =0; 
        for(let i=0; i<A.length; i++){
            maxSum = maxSum + A[i];          // maxSum: sum of all elements
            minSum = Math.max(minSum, A[i]); // minSum: at least one max element
        }
        
        let possibleResult = maxSum; // the max one must be an "ok" result
        
        // do "binary search" (search for better Sum)
        while(minSum <= maxSum){
            // define "mid" (binary search)
            let midSum = (minSum + maxSum) /2;
            
            // check if it can be divided by using 
            // the minMaxSum = "mid", into K blocks ?
            let ok = checkDivisable(midSum, K, A);
            
            // if "ok", means that we can try "smaller"
            // otherwise ("not ok"), we have to try "bigger"
            if(ok == true){
                possibleResult = midSum; // mid is "ok"
                // we can try "smaller"
                maxSum = midSum - 1; 
            }
            else{ // "not ok"
            // we have to try "bigger"
                minSum = midSum + 1;
            }
            // go back to "binary search" until "min > max"
        }
        
        return possibleResult;
    }
    
    // check if it can be divided by using the minMaxSum = "mid", into K blocks ?
      function checkDivisable(mid, k, a){
        let numBlockAllowed = k;
        let currentBlockSum = 0;
        
        for(let i=0; i< a.length; i++){
            currentBlockSum = currentBlockSum + a[i];
            
            if(currentBlockSum > mid){ // means: need one more block
                numBlockAllowed--;
                currentBlockSum = a[i]; // note: next block
            }            
            if(numBlockAllowed == 0){
                return false; // cannot achieve minMaxSum = "mid"
            }
        }
        
        // can achieve minMaxSum = "mid"
        return true;   
    }

console.log(solution(K,M,A));