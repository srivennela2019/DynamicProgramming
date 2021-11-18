const countConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === ''){
        return 1;
    };
    let totalCount = 0;
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            numWays = canConstruct(suffix, wordBank, memo);
            totalCount += numWays
        }
        
    }
    memo[target] = totalCount;
    return totalCount;
}