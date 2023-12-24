//LEETCODE 322

function coinChange(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0
    if (amount < 0) return -1

    let minNumber = Infinity

    for (let coin of coins) {
        const remainder = amount - coin

        const remainderResult = coinChange(coins, remainder, memo)

        if (remainderResult !== -1) {
            minNumber = Math.min(minNumber, remainderResult + 1)
        }
    }

    memo[amount] = minNumber !== Infinity ? minNumber : -1

    return memo[amount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([1, 2, 5], 100))