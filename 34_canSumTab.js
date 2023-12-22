function canSum(numbers, target) {

    const table = Array(target + 1).fill(false)
    table[0] = true

    for (let i = 0; i < table.length; i++) {

        if (table[i] === true) {
            for (const num of numbers) {
                if (i + num < table.length) {
                    table[i + num] = true
                }
            }
        }

    }

    return table[target]

}

console.log(canSum([7, 14], 300))
console.log(canSum([7, 2], 9))

//m -targetSum, n - array length
//Time: O (m * n)
//Space: O(table.length)