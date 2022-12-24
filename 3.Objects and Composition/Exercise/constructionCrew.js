function constructionCrew(obj) {
  if (obj.dizziness == true) {
    const requiredWater = obj.weight * (obj.experience * 0.1);
    obj.levelOfHydrated += requiredWater;
    obj.dizziness = false;
  }
  return obj;
}
console.log(
  constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
