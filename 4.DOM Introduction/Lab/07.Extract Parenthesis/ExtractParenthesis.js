function extract(content) {
  let text = document.querySelector("p").textContent;
  let match = /\((.+?)\)/gm;
  let reg = match.exec(text);
  let result = "";
  while (reg !== null) {
    result += `${reg[1]}; `;
    reg = match.exec(text);
  }
  return result;
}
