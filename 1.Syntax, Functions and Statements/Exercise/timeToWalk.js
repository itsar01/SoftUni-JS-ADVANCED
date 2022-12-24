function timeToWalk(steps, stepM, kmH) {
  let meters = steps * stepM;
  let speedMS = kmH / 3.6;
  let rest = Math.floor(meters / 500) * 60;
  let time = meters / speedMS + rest;

  let hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, 0);

  let minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);

  let seconds = Math.round(time - minutes * 60)
    .toString()
    .padStart(2, 0);

  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.6, 5);

// Write a function that calculates how long it takes a student to get to university.
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.
