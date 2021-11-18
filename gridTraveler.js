const gridTraveler = (m,n) => {
    if(m==1 && n==1) return 1;
    if(m==0 || n==0) return 0;
    return gridTraveler(m-1,n)+ gridTraveler(m,n-1)
}

const gridTravelerMemo = (m,n, memo = {}) =>{
    // are the arguments in the memo
    const key = m+','+n
    if(key in memo) return memo[key];
    if(m==1 && n==1) return 1;
    if(m==0 || n==0) return 0;
    memo[key] = gridTraveler(m-1,n, memo)+ gridTraveler(m,n-1,memo);
    return memo[key];
}

console.log(gridTraveler(8,8));
console.log(gridTravelerMemo(9,9));
 