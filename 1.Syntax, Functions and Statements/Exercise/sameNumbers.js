function sameNumbers(n) {
  let arr = n.toString().split("");
  let first = arr.shift();
  let sum = Number(first);
  let isTrue = true;
  for (let el of arr) {
    if (first !== el) {
      isTrue = false;
    }
    sum += Number(el);
  }
  console.log(isTrue);
  console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
