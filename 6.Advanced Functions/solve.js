const firstPerson = {
  name: "Peter",
  prof: "Fisherman",
  shareInfo: function () {
    console.log(`${this.name} works as a ${this.prof}`);
  },
  getInfo: function () {
    console.log(`${this.prof} is a fucking job`);
  },
};
const secondPerson = { name: "George", prof: "Manager" };
const thirdPerson = { name: "Ivaylo", prof: "Planner" };
firstPerson.shareInfo.apply(secondPerson);
firstPerson.getInfo.apply(secondPerson);
firstPerson.shareInfo.apply(thirdPerson);
