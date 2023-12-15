const histories = ["0 3 6 9 12 15", "1 3 6 10 15 21", "10 13 16 21 30 45"];

function solved9t2(): number {
  let total = 0;

  for (let i = 0; i <= histories.length - 1; i++) {
    let history = histories[i].split(" ").map((item) => +item);
    let allZero = false;
    const sequences: number[][] = [];

    sequences.push(history);

    while (!allZero) {
      const sequence: number[] = [];
      for (let j = 1; j <= history.length - 1; j++) {
        sequence.push(history[j] - history[j - 1]);
      }
      sequences.push(sequence);
      history = sequence;

      allZero = sequence.every((item) => item === 0);
    }

    let nextValue = 0;
    for (let j = sequences.length - 1; j > 0; j--) {
      nextValue = sequences[j - 1][0] - sequences[j][0];
      sequences[j - 1].unshift(nextValue);
    }

    total += nextValue;
  }

  return total;
}
