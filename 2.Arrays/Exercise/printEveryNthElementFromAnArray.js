function printEveryNthElementFromAnArray(array, step) {
  //   let result = [];
  //   for (let i = 0; i < array.length; i += step) {
  //     result.push(array[i]);
  //   }
  //   return result;
  console.log(array.filter((a, i) => i % 2 == 0));
}
printEveryNthElementFromAnArray(["5", "20", "31", "4", "20"], 2);
