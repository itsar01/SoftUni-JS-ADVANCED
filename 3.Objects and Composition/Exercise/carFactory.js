function carFactory(car) {
  let newObj = {};
  newObj.model = car.model;
  newObj["engine"] = {};
  if (car.power <= 90) {
    newObj.engine["power"] = 90;
    newObj.engine["volume"] = 1800;
  } else if (car.power <= 120) {
    newObj.engine["power"] = 120;
    newObj.engine["volume"] = 2400;
  } else if (car.power > 120) {
    newObj.engine["power"] = 200;
    newObj.engine["volume"] = 3500;
  }

  newObj["carriage"] = {};
  newObj.carriage["type"] = car.carriage;
  newObj.carriage["color"] = car.color;

  newObj["wheels"] = [];
  for (let i = 0; i < 4; i++) {
    if (car.wheelsize % 2 == 0) {
      car.wheelsize--;
    }
    newObj.wheels.push(car.wheelsize);
  }
  return newObj;
}
console.table(
  carFactory({
    model: "VW Golf II",
    power: 150,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log("----");
console.table(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
