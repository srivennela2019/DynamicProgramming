const canConstruct = (target, wordBank) => {
    if(target === ''){
        return true;
    };
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                return true;
            };
        }
        
    }
    return false;
}

const canConstructMemo = (target, wordBank, memo= {}) => {
    if(target in memo) return memo[target];
    if(target === ''){
        return true;
    };
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            let suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                mem0[target] = true;
                return true;
            };
        }  
        
    }
    memo[target]=false;
    return false;
}

//
console.log(canConstruct('abcd',['ab','cd','ef']));