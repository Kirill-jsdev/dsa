// function permute(nums) {

//     const result = []

//     function backtrack(start) {

//         if (start === nums.length - 1) {
//             result.push([...nums])

//             return
//         }

//         for (let i = start; i < nums.length; i++) {

//             [nums[start], nums[i]] = [nums[i], nums[start]]

//             backtrack(start + 1)

//             // [nums[start], nums[i]] = [nums[i], nums[start]]
//             [nums[start], nums[i]] = [nums[i], nums[start]]

//         }

//     }

//     backtrack(0)

//     console.log(result)

//     return result
// }


// permute([1,2,3])

function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length - 1) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Restore the array
        }
    }

    backtrack(0);
    return result;
}

console.log(permute([1, 2, 3]));
