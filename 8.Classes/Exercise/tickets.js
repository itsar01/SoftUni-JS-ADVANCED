function program(input, sort) {
  class Ticker {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];
  for (let item of input) {
    let [destination, price, status] = item.split("|");
    price = Number(price);
    let ticket = new Ticker(destination, price, status);
    result.push(ticket);
  }

  result.sort((a, b) => {
    if (sort == "destination") {
      return a.destination.localeCompare(b.destination);
    } else if (sort == "status") {
      return a.status.localeCompare(b.status);
    } else {
      return a.price - b.price;
    }
  });

  return result;
}
console.log(
  program(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
