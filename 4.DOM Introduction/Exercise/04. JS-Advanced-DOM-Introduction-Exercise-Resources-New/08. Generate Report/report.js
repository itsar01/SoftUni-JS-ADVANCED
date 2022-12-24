function generateReport() {
  let tableRow = document.querySelectorAll("tbody tr");
  let tableHeader = document.querySelectorAll("thead tr th");

  let res = [];

  for (let i = 0; i < tableRow.length; i++) {
    let tableData = tableRow[i].cells;
    let tempData = {};
    debugger;
    for (let z = 0; z < tableData.length; z++) {
      let infoTHeader = tableHeader[z].childNodes;
      debugger;
      if (infoTHeader[1].checked) {
        tempData[infoTHeader[0].textContent.trim().toLocaleLowerCase()] =
          tableData[z].textContent;
        debugger;
      }
    }
    res.push(tempData);
    debugger;
  }
  let jsonRes = JSON.stringify(res);
  document.getElementById("output").textContent = jsonRes;
  debugger;
}
