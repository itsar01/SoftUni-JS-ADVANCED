function filterEmployess(input, criteria) {
  let data = JSON.parse(input);
  let [criteriaKey, criteriaValue] = criteria.split("-");
  let result = [];
  for (let el of data) {
    if (el[criteriaKey] == criteriaValue) {
      let innerArray = [];
      innerArray.push(el["first_name"]);
      innerArray.push(el["last_name"]);
      innerArray.push(el["email"]);
      result.push(innerArray);
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(`${i}. ${result[i][0]} ${result[i][1]} - ${result[i][2]}`);
  }
}
filterEmployess(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
console.log("-----");
filterEmployess(
  `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
  "last_name-Johnson"
);
