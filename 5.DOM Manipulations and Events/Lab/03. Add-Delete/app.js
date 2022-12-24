function addItem() {
  //first get the element
  let newElement = document.getElementById("newItemText").value;
  //get the list where the additional element will be included
  let list = document.getElementById("items");
  //check whether there is input
  if (newElement.length === 0) return;
  let listItem = document.createElement("li");
  listItem.textContent = newElement;
  let remove = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");

  console.log(newElement);
  remove.appendChild(linkText);
  remove.href = "#";
  remove.addEventListener("click", deleteItem);

  listItem.appendChild(remove);
  list.appendChild(listItem);

  function deleteItem() {
    listItem.remove();
  }
}
