function fib(num) {

    const table = Array(num + 1).fill(null)
    table[1] = 1
    table[2] = 1

    for (let i = 1; i <= num; i++) {

        if (!table[i]) table[i] = table[i - 1] + table[i - 2]

    }

    return table[num]

}

console.log(fib(100))

//TBULATION: BOTTOM_UP APPROACH
