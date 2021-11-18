const fibonacci = (n)=>{
    if(n<=2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

const fibonacciMemo = (n, memo={})=>{
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n] = fibonacci(n-1,memo) + fibonacci(n-2,memo);
    return memo[n];
}



console.log(fibonacciMemo(10));