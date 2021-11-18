const bestSum = (targetSum, numbers)=> {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
   let shortCombination = null; //array with shoertest possible numbers 
    for(let num of numbers ){
        const remainder = targetSum - num;
        const remCombination = howSum(remainder, numbers);
        if(remCombination !== null) {
            const combination = [...remResult, num];
            if(shortCombination === null || combination.length < shortCombination.length){
                shortCombination = combination;
            }
        }
    }
    return shortCombination;
   }

   const bestSumMemo = (targetSum, numbers, memo ={})=> {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
   let shortCombination = null; //array with shoertest possible numbers 
    for(let num of numbers ){
        const remainder = targetSum - num;
        const remCombination = howSum(remainder, numbers,memo);
        if(remCombination !== null) {
            const combination = [...remResult, num];
            if(shortCombination === null || combination.length < shortCombination.length){
                shortCombination = combination;
            }
        }
    }
    memo[targetSum] = shortCombination;
    return shortCombination;
   }