function addAndRemoveElements(arr) {
  let result = [];
  let initialValue = 0;
  for (let command of arr) {
    initialValue++;
    if (command == "add") {
      result.push(initialValue);
    } else if (command == "remove") {
      result.pop();
    }
  }
  if (result.length == 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}
addAndRemoveElements(["add", "add", "add", "add"]);
console.log("------");
addAndRemoveElements(["remove", "remove", "remove"]);
