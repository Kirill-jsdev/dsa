function zigzagTraversal(matrix) {
    const result = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      if (i % 2 === 0) {
        for (let j = 0; j < cols; j++) {
          result.push(matrix[i][j]);
        }
      } else {
        for (let j = cols - 1; j >= 0; j--) {
          result.push(matrix[i][j]);
        }
      }
    }
  
    return result;
  }
  
  // Example matrix
  const matrix = [
    [1, 8, 9, 16, 17],
    [2, 7, 10, 15, 18],
    [3, 6, 11, 14, 19],
    [4, 5, 12, 13, 20],
  ];
  
  const result = zigzagTraversal(matrix);
  console.log(result);
  