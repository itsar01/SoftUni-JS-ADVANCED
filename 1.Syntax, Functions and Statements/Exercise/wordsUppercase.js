function wordsUppercase(input) {
  let regext = /\w+/gm;
  let matches = input.match(regext);
  let result = [];
  for (let el of matches) {
    result.push(el.toUpperCase());
  }
  console.log(result.join(", "));
}
wordsUppercase("Hi, how are you?");
console.log("-----");
wordsUppercase("hello");
