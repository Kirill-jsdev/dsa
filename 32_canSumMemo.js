function canSum(numbers, target, memo ={}) {
    if (target in memo) return memo[target]
    if (target === 0) return true
    if (target < 0) return false

    for (let num of numbers) {
        const reminder = target - num

        if (canSum(numbers, reminder, memo) === true) {
            memo[target] = true
            return true
        } 
    }

    memo[target] = false
    return false
}

console.log(canSum([7, 14], 300))

//m -targetSum, n - array length
//Time: O (m * n)
//Space: O(h)