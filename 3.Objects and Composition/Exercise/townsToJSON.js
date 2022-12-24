function townsToJSON(input) {
  let town = [];
  let lattitude = [];
  let longitude = [];
  let result = [];
  for (let el of input) {
    [...tokens] = el.split(" | ");
    town.push(tokens[0].slice(2, tokens[0].length));
    lattitude.push(tokens[1]);
    longitude.push(tokens[2].slice(0, tokens[2].length - 2));
  }
  townStart = town.shift();
  lattitudeStart = lattitude.shift();
  longitudeStart = longitude.shift();

  lattitude = lattitude.map(function (x) {
    x = Number(x).toFixed(2);
    return Number(x);
  });
  longitude = longitude.map(function (x) {
    x = Number(x).toFixed(2);
    return Number(x);
  });

  for (let i = 0; i < town.length; i++) {
    let arrTown = {};
    arrTown[townStart] = town[i];
    arrTown[lattitudeStart] = Number(lattitude[i]);
    arrTown[longitudeStart] = Number(longitude[i]);
    result.push(arrTown);
  }
  console.log(JSON.stringify(result));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
console.log("----");
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
