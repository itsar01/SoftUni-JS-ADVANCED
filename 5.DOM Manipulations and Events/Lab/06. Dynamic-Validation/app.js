function validate() {
  let input = document.getElementById("email");
  input.addEventListener("change", checker);
  let regex = new RegExp(/\w+@\w+.com/m);
  function checker(event) {
    if (!regex.test(input.value)) {
      event.target.classList.add("error");
    } else {
      event.target.classList = "";
    }
  }
}
