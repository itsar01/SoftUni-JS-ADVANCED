function solve(arr) {
  //   arr.forEach(printRow);
  //   function printRow(row) {
  //     console.log(row);
  //     row.forEach(printNumber);
  //   }
  //   function printNumber(num) {
  //     console.log(num);
  //   }
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let col = 0; col < arr[i].length; col++) {
      sum.push(arr[i][col]);
      console.log(arr[i][col]);
    }
  }
  let reduced = sum.reduce((acc, curr) => acc + "" + curr);
  console.log(reduced);
}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);
