function diagonals(matrix) {  
  if (!matrix.length) return 0;
  for (var i = 0, j = 0, k = matrix[i].length - 1, sum = 0; i < matrix.length; i++) {
    sum += matrix[i][j++] + matrix[i][k--];
  }
  return sum;
}

module.exports = {
  diagonals: diagonals
};