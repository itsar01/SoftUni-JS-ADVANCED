function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let tableList = Array.from(document.querySelectorAll("tbody tr"));
    let searchField = document.getElementById("searchField").value;
    console.log(searchField);
    for (let row of tableList) {
      let line = row.textContent;
      if (line.includes(searchField)) {
        console.log("Yes");
        console.log(line);
        row.classList.add("select");
      } else {
        row.classList.remove("select");
      }
    }
  }
}
