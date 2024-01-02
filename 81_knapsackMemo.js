//Time O (m * n)

function knapsack(profit, weight, capacity) {
    const memo = {}

    function helper(i, currentCapacity) {
        if (i === profit.length || currentCapacity <= 0) return 0

        const memoKey = `${i}-${currentCapacity}`
        if (memo[memoKey]) return memo[memoKey]

        let maxProfit = 0
        // Skip item
        maxProfit = helper(i + 1, currentCapacity)

        // Include item
        if (weight[i] <= currentCapacity) {
            const includeProfit = profit[i] + helper(i + 1, currentCapacity - weight[i])
            maxProfit = Math.max(maxProfit, includeProfit)
        }

        memo[memoKey] = maxProfit
        return maxProfit
    }

    return helper(0, capacity)
}

// example
const profit = [4, 4, 7, 1]
const weight = [5, 2, 3, 1]
const capacity = 8

console.log(knapsack(profit, weight, capacity)) // Output: 12
