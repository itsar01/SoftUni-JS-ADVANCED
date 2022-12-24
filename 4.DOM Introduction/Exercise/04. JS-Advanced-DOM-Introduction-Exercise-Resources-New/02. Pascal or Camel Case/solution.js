function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let lowerCase = input.toLowerCase();
  let result = "";
  lowerCase = lowerCase.split(" ");
  if (currentCase == "Pascal Case") {
    for (let el of lowerCase) {
      for (let i = 0; i < el.length; i++) {
        let currentChar = el[i];
        if (i == 0) {
          currentChar = currentChar.toUpperCase();
        }
        result += currentChar;
      }
    }
  } else if (currentCase == "Camel Case") {
    for (let i = 0; i < lowerCase.length; i++) {
      let currentChar = lowerCase[i];
      for (let x = 0; x < currentChar.length; x++) {
        if (i === 0) {
          result += currentChar[x];
        } else {
          if (x == 0) {
            result += currentChar[x].toUpperCase();
          } else {
            result += currentChar[x];
          }
        }
      }
    }
  } else {
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}
