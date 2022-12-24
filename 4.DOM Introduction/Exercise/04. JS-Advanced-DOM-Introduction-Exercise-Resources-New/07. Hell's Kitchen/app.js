function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  function onClick() {
    let input = JSON.parse(document.getElementById("inputs").children[1].value);
    let bestRestaurantInfo = document.querySelector("#bestRestaurant p");
    let bestResWorker = document.querySelector("#workers p");
    let result = [];
    for (let data of input) {
      let [name, workerList] = data.split(" - ");
      if (!result.find((e) => e.name === name)) {
        result.push({
          name,
          avgSalary: 0,
          bestSalary: 0,
          sumSalary: 0,
          workerList: [],
        });
      }
      let currentRestaurant = result.find((e) => e.name === name);
      // if there is workerList, then split workerlist
      workerList = workerList && workerList.split(", ");
      for (let currentWorker of workerList) {
        updateRestaurant(currentRestaurant, currentWorker);
      }
    }
    let bestRestaurant = result.sort((a, b) => b.avgSalary - a.avgSalary)[0];
    bestRestaurantInfo.textContent = `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurant.avgSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
    let sortListOfWorker = bestRestaurant.workerList.sort(
      (a, b) => b.salary - a.salary
    );

    let buff = "";
    for (let worker of sortListOfWorker) {
      buff += `Name: ${worker.name} With Salary: ${worker.salary} `;
    }
    bestResWorker.textContent += buff;
  }

  function updateRestaurant(obj, worker) {
    let [name, salary] = worker.split(" ");
    salary = Number(salary);
    obj.sumSalary += Number(salary);
    if (obj.bestSalary < salary) {
      obj.bestSalary = salary;
    }
    obj.workerList.push({
      name,
      salary,
    });
    obj.avgSalary = obj.sumSalary / obj.workerList.length;
  }
}

// let inputs = document.querySelector("#inputs textarea").value;
//  let parsed = JSON.parse(inputs);
//  for (let line of parsed) {
//    let restaurant = line.split(" - ");
//    let workersArr = restaurant.pop().split(" ");
//    let workersObj = {};
//    for (let i = 0; i < workersArr.length; i += 2) {
//      workersObj[workersArr[i]] = [workersArr[i + 1]];
//    }
//    console.log(workersObj);

//  }
//  //logic for best restaurant (with highest average salary)

//  //workers should be sorted by their salaries in descending order
