function zigzag(rows, cols) {

    const matrix = Array.from({length: rows}, () => new Array(cols).fill(0))

    let startVal = 1

    for (let c = 0; c < cols; c++) {

        if (c % 2 === 0) {

            for (let r = 0; r < rows; r++) {

                matrix[r][c] = startVal
                startVal++
                
            }
            
        }
        else {
            for (let r = rows - 1; r >= 0; r--) {
                matrix[r][c] = startVal
                startVal++
            }
        }




    }

    console.log(matrix)

}

zigzag(4, 4)