const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for ( let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder,numbers)=== true){
            return true;
        }
    }
  return false;
}

const canSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for ( let num of numbers){
        const remainder = targetSum - num;
        if( canSum(remainder,numbers, memo) === true){
            memo[targetSum] = true
            return true;
        }
    }
  memo[targetSum] = false;
  return false; 
} 

console.log(canSum(7,[5,2,6,9]));
console.log(canSumMemo(300,[7,14]));