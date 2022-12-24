function greatestCommonDivisorGCD(x, y) {
  let gcd = 0;
  for (let i = 1; i <= x && i <= y; i++) {
    if (x % i == 0 && y % i == 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}
greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);
