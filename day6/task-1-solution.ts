const time = [47, 84, 74, 67];
const distance = [207, 1394, 1209, 1014];

function solved6t1(): number {
  let multiply = 1;

  for (let i = 0; i <= time.length - 1; i++) {
    let wins = 0;
    for (let j = 1; j <= time[i] - 1; j++) {
      if (j * (time[i] - j) > distance[i]) {
        wins++;
      }
    }
    multiply *= wins;
  }

  return multiply;
}
