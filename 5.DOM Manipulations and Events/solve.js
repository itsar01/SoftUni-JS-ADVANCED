function solve() {
  let element = "lsadfmsadfasdf";
  let result = "";
  for (let el of element) {
    let currentNumber = el.charCodeAt() + 1;
    result += String.fromCharCode(currentNumber);
  }
}
solve();
