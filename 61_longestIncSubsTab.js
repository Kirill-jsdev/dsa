function lengthOfLongestIncSubsequenceTab(nums = [10,9,2,5,3,7,101,18]) {

    const table = Array(nums.length).fill(1) //because theoretically if there is no ony bigger values ahead - the item itself is the answer


    for (let i = table.length - 1; i >=0; i--) {

        let endSlice = nums.slice(i + 1)

        for (let j = 0; j < endSlice.length; j++) {

            if (nums[i] < endSlice[j]) { //here we make sure that the upper item is bigger than previous

                table[i] = Math.max(table[i], 1 + table[1 + i + j])
            }

        }

    }

    return Math.max(...table)


}

console.log(lengthOfLongestIncSubsequenceTab())