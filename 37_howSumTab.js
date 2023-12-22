function howSum(numbers, target) {

    const table = Array(target + 1).fill(null)

    table[0] = []

    for (let i = 0; i <= target; i++) {
        if (table[i] !== null) {

            for (const num of numbers) {
                table[i + num] = [...table[i], num]
            }

        }
    }

    return table[target]

}

console.log(howSum([7, 2], 9))
console.log(howSum([7, 2], 1))
console.log(howSum([7, 14], 300))

//m -targetSum, n - array length
//Time O (n * m *m)
//Space O (m * m)