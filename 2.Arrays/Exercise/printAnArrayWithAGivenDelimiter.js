function printAnArrayWithAGivenDelimiter(arr, delimeter) {
  let modifiedArr = arr.join(delimeter);
  console.log(modifiedArr);
}
printAnArrayWithAGivenDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
printAnArrayWithAGivenDelimiter(
  ["How about no?", "I", "will", "not", "do", "it!"],
  "_"
);
