const howSum = (targetSum, numbers)=> {
 if(targetSum === 0) return [];
 if(targetSum < 0) return null;

 for(let num of numbers ){
     const remainder = targetSum - num;
     const remResult = howSum(remainder, numbers);
     if(remResult !== null) {
         return [...remResult, num]
     }
 }
 return null;
}

const howSumMemo = (targetSum, numbers, memo = {})=> {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
   
    for(let num of numbers ){
        const remainder = targetSum - num;
        const remResult = howSum(remainder, numbers);
        if(remResult !== null) {
            memo[targetSum] = [...remResult, num]    
            return  memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;  
   }
    

console.log(howSum(7,[3,2]))
console.log(howSum(7,[4,2]))

console.log(howSumMemo(7,[3,2]))
console.log(howSumMemo(7,[4,2]))