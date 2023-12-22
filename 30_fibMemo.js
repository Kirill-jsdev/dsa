function fib(num, memo = {}) {
    if (num in memo) return memo[num]

    if (num <= 2) return 1

    const val = fib(num - 1, memo) + fib(num - 2, memo)
    memo[num] = val
    return val
}

console.log(fib(100))

//MEMOIZATION: TOP-DOWN APPROACH
