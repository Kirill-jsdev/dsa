//Leetcode 1143
//In order to solve - imagine 2D grid

function longestCommonSubsequence(text1 = "abcde", text2 = "ace") {

    const table = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1).fill(0))

    console.log(table)


    for (let i = text1.length - 1; i >= 0; i--) {

        for (let j = text2.length - 1; j >= 0; j--) {

            if (text1[i] === text2[j]) {
                table[i][j] = 1 + table[i + 1][j + 1]
            } else {
                table[i][j] = Math.max(table[i + 1][j], table[i][j + 1])
            }

        }

    }

    return table[0][0]

}

console.log(longestCommonSubsequence())

