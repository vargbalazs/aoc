function solved1t1(input: string[]): number {
  let cumulated = 0;

  input.forEach((line) => {
    let firstDigit = "";
    let lastDigit = "";

    for (let i = 0; i <= line.length - 1; i++) {
      if (!isNaN(+line.charAt(i))) {
        firstDigit = line.charAt(i);
        break;
      }
    }

    for (let i = line.length - 1; i >= 0; i--) {
      if (!isNaN(+line.charAt(i))) {
        lastDigit = line.charAt(i);
        break;
      }
    }

    cumulated += +firstDigit.concat(lastDigit);
  });

  return cumulated;
}
