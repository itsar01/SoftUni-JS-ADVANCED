function listOfNames(list) {
  let result = [];
  let sorted = list.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sorted.length; i++) {
    result.push(i + 1 + "." + sorted[i]);
  }
  console.log(result.join("\n"));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
