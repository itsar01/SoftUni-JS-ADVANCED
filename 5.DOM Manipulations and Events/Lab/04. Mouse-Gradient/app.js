function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("click", gradientMove);
  gradient.addEventListener("mousemove", gradientOut);
  function gradientMove(event) {
    let power = event.offsetX / event.target.clientWidth;
    power = Math.trunc(power * 100);
    document.getElementById("result").textContent = power + "%";
  }
  function gradientOut(event) {
    document.getElementById("result").textContent = "";
  }
}
