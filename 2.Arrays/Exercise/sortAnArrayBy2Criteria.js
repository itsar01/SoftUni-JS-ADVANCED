function sortAnArrayBy2Criteria(input) {
  let sorted = input.sort((a, b) =>
    a.length !== b.length ? a.length - b.length : a.localeCompare(b)
  );
  console.log(sorted.join("\n"));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
console.log("----");
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("----");
sortAnArrayBy2Criteria(["test", "Deny", "omen", "Default"]);
