function addItem() {
  //taking the value from newItemText field.
  let text = document.getElementById("newItemText").value;
  //creating the element that will be created.
  let li = document.createElement("li");
  //including the element to the DOM tree.
  console.log(li.appendChild(document.createTextNode(text)));
  document.getElementById("items").appendChild(li);
  //clearing the input:
  document.getElementById("newItemText").value = "";
}
