function encodeAndDecodeMessages() {
  let divs = Array.from(document.getElementById("main").children);
  let textEncode = divs[0].children[1];
  let buttonEncode = divs[0].children[2];
  let textDecode = divs[1].children[1];
  let buttonDecode = divs[1].children[2];
  buttonEncode.addEventListener("click", encodeAndSend);
  buttonDecode.addEventListener("click", decodeAndRead);
  function encodeAndSend(e) {
    let encoded = e.target.parentElement.children[1].value;
    textDecode.textContent = asciiChange(encoded);
    textEncode.value = "";

    function asciiChange(text) {
      let element = text;
      let result = "";
      for (let el of element) {
        let currentNumber = el.charCodeAt() + 1;
        result += String.fromCharCode(currentNumber);
      }
      return result;
    }
  }

  function decodeAndRead(e) {
    let decoded = e.target.parentElement.children[1].value;
    textDecode.value = asciiReverse(decoded);
    function asciiReverse(text) {
      let element = text;
      let result = "";
      for (let el of element) {
        let currentNumber = el.charCodeAt() - 1;
        result += String.fromCharCode(currentNumber);
      }
      return result;
    }
  }
}
