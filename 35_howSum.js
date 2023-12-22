function howSum(numbers, target) {

    if (target === 0) return []
    if (target < 0) return null

    for (const num of numbers) {
        const remainder = target - num

        const remainderResult = howSum(numbers, remainder)

        if (remainderResult !== null) {
            return [...remainderResult, num]

        }
    }

    return null


}

console.log(howSum([7, 2], 9))
console.log(howSum([7, 2], 1))

//m -targetSum, n - array length
//Time O (n ^ m * m)
//Space O (m)
