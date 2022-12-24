function squareOfStars(number) {
  let star = "*";

  for (let i = 0; i < number - 1; i++) {
    star += " *";
  }
  for (let z = 0; z < number; z++) {
    console.log(star);
  }
}
// squareOfStars(1);
squareOfStars(2);
// squareOfStars(5);
