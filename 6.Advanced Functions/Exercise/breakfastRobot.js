function breakfastRobot() {
  let recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let commands = {
    restock,
    prepare,
    report,
  };

  return manager;

  function manager(line) {
    let [command, param, qty] = line.split(" ");
    return commands[command](param, qty);
  }

  function restock(type, qty) {
    stock[type] += Number(qty);
    return "Success";
  }

  function prepare(recipeAsStr, qty) {
    qty = Number(qty);
    // find recipe
    let recipe = Object.entries(recipes[recipeAsStr]);
    // calculate total ingredient quantity
    // compare one by one with stock
    for (const [ingredient, required] of recipe) {
      // if on is insufficient -> return error
      if (stock[ingredient] < required * qty) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }
    // otherwise, substract quantities from stock and return success
    recipe.forEach(
      ([ingredient, required]) => (stock[ingredient] -= required * qty)
    );
    return `Success`;
  }

  function report() {
    return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
  }
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock
console.log(manager("report")); // Error: not enough carbohydrate in stock
