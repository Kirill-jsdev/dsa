/**
 * @param {number[]} nums
 * @return {number[]}
 */

const mergeTwoSortedArrays = (arr1, arr2) => {

    if (!arr1.length) return arr2
    if (!arr2.length) return arr1

    let i = 0
    let j = 0

    let result = []

    while (i < arr1.length && j < arr2.length) {
        let currF = arr1[i]
        let currS = arr2[j]

        if (currF < currS) {
            result.push(currF)
            i++
        } else {
            result.push(currS)
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result

}


var sortArray = function(nums) {

    if (nums.length <= 1) return nums

    let mid = Math.floor(nums.length / 2)

    let first = nums.slice(0, mid)
    let second = nums.slice(mid)

    let arr1 = sortArray(first)
    let arr2 = sortArray(second)

    return mergeTwoSortedArrays(arr1, arr2)

}