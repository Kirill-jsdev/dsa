function howSum(numbers, target, memo = {}) {

    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null

    for (const num of numbers) {
        const remainder = target - num

        const remainderResult = howSum(numbers, remainder, memo)

        if (remainderResult !== null) {
            memo[target] = [...remainderResult, num]
            return memo[target]

        }
    }

    memo[target] = null
    return null


}

console.log(howSum([7, 2], 9))
console.log(howSum([7, 2], 1))
console.log(howSum([7, 14], 300))

//m -targetSum, n - array length
//Time O (n * m *m)
//Space O (m * m)
