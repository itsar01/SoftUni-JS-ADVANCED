function stringLength(a, b, c) {
  let sumLength = 0;
  let averageLength = 0;

  let firstLength = a.length;
  let secondLength = b.length;
  let thirdLength = c.length;

  sumLength = firstLength + secondLength + thirdLength;
  averageLength = Math.floor(sumLength / 3);

  console.log(sumLength);
  console.log(averageLength);
}
stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
