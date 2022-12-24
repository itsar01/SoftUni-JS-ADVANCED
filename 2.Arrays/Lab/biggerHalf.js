function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let sliced = sorted.slice(sorted.length / 2, sorted.length);

  return sliced;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log("---");
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
