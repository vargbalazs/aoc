function solved4t1(input: string[]): number {
  let totalPoints = 0;

  input.forEach((line) => {
    const cardNumber = line.substring(0, line.indexOf(":"));

    const winningNumbers = line
      .substring(line.indexOf(":") + 1, line.indexOf("|"))
      .trim()
      .split(" ")
      .filter((number) => number != "");

    const ownNumbers = line
      .substring(line.indexOf("|") + 1)
      .trim()
      .split(" ")
      .filter((number) => number != "");

    let winningCards = 0;

    ownNumbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        winningCards++;
      }
    });

    let point = winningCards > 0 ? Math.pow(2, winningCards - 1) : 0;

    totalPoints += point;
  });

  return totalPoints;
}
