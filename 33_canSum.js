function canSum(numbers, target) {
    if (target === 0) return true
    if (target < 0) return false

    for (let num of numbers) {
        const reminder = target - num

        if (canSum(numbers, reminder, memo) === true) return true
    }

    return false
}

console.log(canSum([3, 8], 7))

//m -targetSum, n - array length
//Time: O (m ^ n)
//Space: O(h)