function extractIncreasingSubsequenceFromArray(arr) {
  let result = [arr.shift()];
  for (let number of arr) {
    // if (result.length == 0) {
    //   result.push(number);
    // }
    if (number > result[result.length - 1]) {
      result.push(number);
    }
  }
  return result;
}
console.log(
  extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
);
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));
console.log(extractIncreasingSubsequenceFromArray([1, 1, 1, 1, 1]));
