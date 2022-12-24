function toggle() {
  let collection = document.getElementsByClassName("button")[0].textContent;
  let hiddenElement = document.getElementById("extra");
  if (collection == "More") {
    hiddenElement.style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "Less";
  } else if (collection == "Less") {
    hiddenElement.style.display = "none";
    document.getElementsByClassName("button")[0].textContent = "More";
  }
}
