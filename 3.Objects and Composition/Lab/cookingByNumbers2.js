function cookingByNumbers2(...input) {
  let startNum = Number(input.shift());

  const parser = {
    chop: (x) => x / 2,
    dice: (x) => Math.sqrt(x),
    spice: (x) => x + 1,
    bake: (x) => x * 3,
    fillet: (x) => x * 0.8,
  };

  for (let command of input) {
    startNum = parser[command](startNum);
    console.log(startNum);
  }
}
cookingByNumbers2("32", "chop", "chop", "chop", "chop", "chop");
console.log("----");
cookingByNumbers2("9", "dice", "spice", "chop", "bake", "fillet");
