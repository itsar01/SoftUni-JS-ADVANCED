function focused() {
  let inputs = document.getElementsByTagName("input");

  for (let input of inputs) {
    input.addEventListener("mouseover", focusInput);
    input.addEventListener("mouseout", blurInput);
  }

  function focusInput(event) {
    event.target.parentElement.classList.add("focused");
  }
  function blurInput(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
