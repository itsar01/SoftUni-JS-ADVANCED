function lockedProfile() {
  let profiles = document.getElementsByClassName("profile");
  let buttons = Array.from(document.querySelectorAll("button"));
  for (let button of buttons) {
    button.addEventListener("click", showHidden);
  }

  function showHidden(e) {
    const profile = e.target.parentElement.getElementsByTagName("div");
    if (profile[0].parentElement.children[2].checked == true) {
      return;
    }
    if (e.target.textContent == "Show more") {
      profile[0].style.display = "block";
      e.target.textContent = "Hide it";
    } else {
      profile[0].style.display = "none";
      e.target.textContent = "Show more";
    }
  }
}
