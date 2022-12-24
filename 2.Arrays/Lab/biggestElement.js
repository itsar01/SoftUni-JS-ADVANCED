function solve(matrix) {
  let resultLeft = 0;
  let resultRight = 0;
  let secondIndex = matrix[0].length - 1;
  for (let i = 0; i < matrix.length; i++) {
    resultLeft += matrix[i][i];
    resultRight += matrix[i][secondIndex];
    secondIndex--;
  }

  console.log(`${resultLeft} ${resultRight}`);
}
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
