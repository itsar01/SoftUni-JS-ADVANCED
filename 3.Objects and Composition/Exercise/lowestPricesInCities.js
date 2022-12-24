function lowestPricesInCities(input) {
  const list = {};
  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);
    if (list.hasOwnProperty(product)) {
      if (list[product]["price"] > price) {
        list[product]["price"] = price;
        list[product]["town"] = town;
      }
    } else {
      list[product] = {
        price,
        town,
      };
    }
  }
  for (let key in list) {
    console.log(`${key} -> ${list[key]["price"]} (${list[key]["town"]})`);
  }
  console.table(list);
}
lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
console.log("----");
lowestPricesInCities([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
