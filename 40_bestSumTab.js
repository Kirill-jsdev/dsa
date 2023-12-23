function bestSum(numbers, target) {
    const table = Array(target + 1).fill(null)

    table[0] = []

    for (let i = 0; i < target; i++) {

        if (table[i] !== null) {

            for (const num of numbers) {

                let curr = [...table[i]]
                let next = table[i + num]

                let nextNewVal = [...table[i], num]

                if (!next || next && next.length > nextNewVal.length) {
                    table[i + num] = nextNewVal
                }

            }


        }


    }

    return table[target]
}


console.log(bestSum([5, 3, 4, 7], 7))
console.log(bestSum([5, 3, 2], 8))
console.log(bestSum([1, 2, 5, 25], 100))

//m -targetSum, n - array length
//Time O (n * m *m)
//Space O (m * m)