//Leetcode 90

function subsets(arrWithDup) {

    arrWithDup.sort()
    const subsets = []

    function backtrack(start, currSet) {

        subsets.push([...currSet])

        for (let i = start; i < arrWithDup.length; i++) {

            if (i > start && arrWithDup[i] === arrWithDup[i - 1]) continue

            currSet.push(arrWithDup[i])
            backtrack(i + 1, currSet)
            currSet.pop()

        }

    }

    backtrack(0, [])

    return subsets

}

console.log(subsets([1, 1, 2]))