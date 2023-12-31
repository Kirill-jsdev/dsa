//TO BE DISCUSSED...

var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([1, 2, 5], 100))