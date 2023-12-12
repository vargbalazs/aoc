const time = [47847467];
const distance = [207139412091014];

function solved6t2(): number {
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
