function subsets(nums) {

    const subsets = []

    function  helper(start, currSet) {
        subsets.push([...currSet])

        for (let i = start; i < nums.length; i++) {

            currSet.push(nums[i])
            helper(i + 1, currSet)
            currSet.pop()

        }
    }

    helper(0, [])

    return subsets

}

console.log(subsets([1, 2, 3]))