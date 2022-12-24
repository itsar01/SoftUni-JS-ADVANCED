function sortArray(arr, type) {
  let res = [];
  let commands = {
    asc: (arr) => (res = arr.sort((a, b) => a - b)),
    desc: (arr) => (res = arr.sort((a, b) => b - a)),
  };
  commands[type](arr);

  return res;
}
sortArray([14, 7, 17, 6, 8], "asc");
sortArray([14, 7, 17, 6, 8], "desc");
