//LEETCODE 322

function coinChange(coins, amount) {
    if (amount === 0) return 0
    if (amount < 0) return -1

    let minNumber = Infinity

    for (let coin of coins) {
        const remainder = amount - coin

        const remainderResult = coinChange(coins, remainder)

        if (remainderResult !== -1) {
            minNumber = Math.min(minNumber, remainderResult + 1)
        }
    }

    return minNumber !== Infinity ? minNumber : -1
}

console.log(coinChange([1, 2, 5], 11))