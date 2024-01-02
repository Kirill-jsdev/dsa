//Time O (2 ^ N)

function knapsack(profit, weight, capacity) {
    return helper(0, profit, weight, capacity)
}

function helper(i, profit, weight, capacity) {

    if (i === profit.length) return 0

    //skip item
    let maxProfit = helper(i + 1, profit, weight, capacity)

    //include item
    let newCap = capacity - weight[i]

    if (newCap >= 0) {
        let p = profit[i] + helper(i + 1, profit, weight, newCap)
        maxProfit = Math.max(maxProfit, p)
    }


    return maxProfit

}

//example
const profit = [4, 4, 7, 1]
const weight = [5, 2, 3, 1]
const capacity = 8

console.log(knapsack(profit, weight, capacity))