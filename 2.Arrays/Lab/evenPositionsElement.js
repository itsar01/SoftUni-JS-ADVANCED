function evenPositionsElement(array) {
  let result = [];

  for (let i = 0; i <= array.length; i++) {
    if (i % 2 !== 1) {
      result.push(array[i]);
    }
  }
  return result.join(" ");
}
console.log(evenPositionsElement(["20", "30", "40", "50", "60"]));

function solve(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i += 2) {
    result += arr[i];
    result += " ";
  }
  return result;
}
console.log(solve(["20", "30", "40", "50", "60"]));
