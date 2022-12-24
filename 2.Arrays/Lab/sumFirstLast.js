function sumFirstLast(arr) {
  let first = arr.shift();
  let last = arr.pop();
  let result = Number(first) + Number(last);

  return result;
}
console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));
