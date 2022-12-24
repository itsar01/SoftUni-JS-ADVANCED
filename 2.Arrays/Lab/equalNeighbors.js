function solve(matrix) {
  let matched = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let z = 0; z < matrix[i].length; z++) {
      if (z !== matrix[i].length - 1) {
        if (matrix[i][z] == matrix[i][z + 1]) {
          matched++;
        }
      }
      if (i !== matrix.length - 1) {
        if (matrix[i][z] == matrix[i + 1][z]) {
          matched++;
        }
      }
    }
  }
  return matched;
}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
