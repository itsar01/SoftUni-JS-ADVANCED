function sumTable() {
  let table = Array.from(document.querySelectorAll("td"));
  let sum = 0;
  for (let i = 0; i < table.length - 1; i++) {
    let value = Number(table[i].textContent);
    if (!isNaN(value)) {
      console.log(value);
      sum += value;
    }
  }
  document.getElementById("sum").textContent = sum;
}
