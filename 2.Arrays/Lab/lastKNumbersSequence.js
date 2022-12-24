function lastKNumbersSequence(n, k) {
  let array = [1];
  let array1 = [1, 2];
  let array2 = [1, 2, 3];
  let array3 = [1, 2, 3, 4];
  let array4 = [1, 2, 3, 4, 5];
  let array5 = [1, 2, 3, 4, 5, 6];

  let sliced = array.slice(-3).reduce((a, b) => a + b);
  let sliced1 = array1.slice(-3).reduce((a, b) => a + b);
  let sliced2 = array2.slice(-3).reduce((a, b) => a + b);
  let sliced3 = array3.slice(-3).reduce((a, b) => a + b);
  let sliced4 = array4.slice(-3).reduce((a, b) => a + b);
  let sliced5 = array5.slice(-3).reduce((a, b) => a + b);

  console.log(sliced);
  console.log(sliced1);
  console.log(sliced2);
  console.log(sliced3);
  console.log(sliced4);
  console.log(sliced5);
}
lastKNumbersSequence();
