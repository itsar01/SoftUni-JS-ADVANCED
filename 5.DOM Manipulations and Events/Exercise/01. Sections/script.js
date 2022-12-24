function create(words) {
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.addEventListener("click", showText);
    p.style.display = "none";
    p.textContent = words[i];
    div.appendChild(p);
    document.getElementById("content").appendChild(div);

    function showText(e) {
      e.target.children[0].style.display = "block";
    }
  }
}
