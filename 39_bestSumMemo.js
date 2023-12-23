//IMPORTANT STEPS OF UPDATING LOCAL VALUE WHICH WILL BE RETURNED

function bestSum(numbers, target, memo = {}) {

    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null

    let shortestCombination = null

    for (const num of numbers) {

        const remainder = target - num

        const remainderResult = bestSum(numbers, remainder, memo)

        if (remainderResult !== null) {
            const combination = [...remainderResult, num]

            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    memo[target] = shortestCombination
    return shortestCombination
}

console.log(bestSum([5, 3, 4, 7], 7))
console.log(bestSum([5, 3, 2], 8))
console.log(bestSum([1, 2, 5, 25], 100))

//m -targetSum, n - array length
//Time O (n * m *m)
//Space O (m * m)