function townPopulation(townsArr) {
  const towns = {};

  for (let townAsString of townsArr) {
    let [name, population] = townAsString.split(" <-> ");
    population = Number(population);

    if (towns.hasOwnProperty(name)) {
      population += towns[name];
    }
    towns[name] = population;
  }

  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
  "Las Vegas <-> 1",
]);
console.log("----");
