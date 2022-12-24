function aggregateElements(array) {
  let sum = 0;
  let inverse = 0;
  let concat = "";

  for (let el of array) {
    sum += Number(el);
    inverse += 1 / el;
    concat += el.toString();
  }

  console.log(sum);
  console.log(inverse);
  console.log(concat);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
