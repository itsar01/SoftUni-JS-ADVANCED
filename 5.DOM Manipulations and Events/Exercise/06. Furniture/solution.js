function solve() {
  let textInputElement = document.getElementsByTagName("textarea")[0];
  let textOuputElement = document.getElementsByTagName("textarea")[1];
  let tableElement = document.getElementsByTagName("tbody")[0];

  let buyButtonElement = document.getElementsByTagName("button")[1];
  buyButtonElement.addEventListener("click", onBuy);

  let generateButtonElement = document.getElementsByTagName("button")[0];
  generateButtonElement.addEventListener("click", onGenerate);

  function onGenerate() {
    let input = JSON.parse(textInputElement.value);
    for (let i = 0; i < input.length; i++) {
      let newRowElemnt = document.createElement("tr");

      let tdImageElement = document.createElement("td");
      let imageElement = document.createElement("img");
      imageElement.src = input[i].img;
      tdImageElement.appendChild(imageElement);
      newRowElemnt.appendChild(tdImageElement);

      let tdNameElement = document.createElement("td");
      let paragraphNameElement = document.createElement("p");
      paragraphNameElement.textContent = input[i].name;
      tdNameElement.appendChild(paragraphNameElement);
      newRowElemnt.appendChild(tdNameElement);

      let tdPriceElement = document.createElement("td");
      let paragraphPriceElement = document.createElement("p");
      paragraphPriceElement.textContent = input[i].price;
      tdPriceElement.appendChild(paragraphPriceElement);
      newRowElemnt.appendChild(tdPriceElement);

      let tdFactorElement = document.createElement("td");
      let paragraphFactorElement = document.createElement("p");
      paragraphFactorElement.textContent = input[i].decFactor;
      tdFactorElement.appendChild(paragraphFactorElement);
      newRowElemnt.appendChild(tdFactorElement);

      let tdCheckBoxElement = document.createElement("td");
      let checkBoxElement = document.createElement("input");
      checkBoxElement.type = "checkbox";
      tdCheckBoxElement.appendChild(checkBoxElement);
      newRowElemnt.appendChild(tdCheckBoxElement);

      tableElement.appendChild(newRowElemnt);
    }
  }

  function onBuy() {
    let checkboxElements = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    );
    let namesArr = [];
    let totalSum = 0;
    let totalFactor = 0;
    let counter = 0;
    for (const box of checkboxElements) {
      if (box.checked == true) {
        let currentRowElement = box.parentElement.parentElement;
        let currentTds = currentRowElement.getElementsByTagName("td");

        let name = currentTds[1].querySelector("p");
        let price = currentTds[2].querySelector("p");
        let decorationFactor = currentTds[3].querySelector("p");

        counter++;
        namesArr.push(name.textContent);
        totalSum += Number(price.textContent);
        totalFactor += Number(decorationFactor.textContent);
      }
    }
    let avrgFactor = totalFactor / counter;
    textOuputElement.textContent = `Bought furniture: ${namesArr.join(", ")}\n`;
    textOuputElement.textContent += `Total price: ${totalSum.toFixed(2)}\n`;
    textOuputElement.textContent += `Average decoration factor: ${avrgFactor}`;
  }
}
// let buttons = document.querySelectorAll("button");

// buttons[0].addEventListener("click", generate);
// buttons[1].addEventListener("click", buy);

// function generate(e) {
//   let currentItems = JSON.parse(
//     document.querySelectorAll("textarea")[0].value
//   );
//   let tableBody = document.getElementsByTagName("tbody")[0];
//   for (let item of currentItems) {
//     let tableRow = document.createElement("tr");
//     tableRow.innerHTML =
//       `<td><img src="${item.img}"</td>` +
//       `<td><p>${item.name}</p></td>` +
//       `<td><p>${item.price}</p></td>` +
//       `<td><p>${item.decFactor}</p></td>` +
//       `<td><input type="checkbox"></td>`;
//     tableBody.appendChild(tableRow);
//   }
// }
// function buy() {
//   let resultArea = document.querySelectorAll("textarea")[1];
//   let table = Array.from(document.querySelectorAll("tbody tr"));
//   let res = [];
//   for (let el of table) {
//     if (el.querySelector("input[type=checkbox]:checked")) {
//       let tableData = Array.from(el.querySelectorAll("td"));
//       let info = {
//         name: tableData[1].children[0].textContent,
//         price: tableData[2].children[0].textContent,
//         decFactor: tableData[3].children[0].textContent,
//       };
//       res.push(info);
//     }
//   }
//   let names = "";
//   let totalPrice = 0;
//   let decFactor = 0;
//   for (let i = 0; i < res.length; i++) {
//     let item = res[i];
//     let sep = i == res.length - 1 ? "" : ", ";
//     names += item.name + sep;
//     totalPrice += Number(item.price);
//     decFactor += Number(item.decFactor);
//   }
//   decFactor /= res.length;

//   resultArea.value = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(
//     2
//   )}\nAverage decoration factor: ${decFactor}`;
// }
