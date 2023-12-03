function solved1t2(input: string[]): number {
  let cumulated = 0;

  const numberInWords: numberInWords[] = [
    { word: "oneight", value: "18" },
    { word: "twone", value: "21" },
    { word: "threeight", value: "38" },
    { word: "fiveight", value: "58" },
    { word: "sevenine", value: "79" },
    { word: "eightwo", value: "82" },
    { word: "eighthree", value: "83" },
    { word: "nineight", value: "98" },
    { word: "one", value: "1" },
    { word: "two", value: "2" },
    { word: "three", value: "3" },
    { word: "four", value: "4" },
    { word: "five", value: "5" },
    { word: "six", value: "6" },
    { word: "seven", value: "7" },
    { word: "eight", value: "8" },
    { word: "nine", value: "9" },
  ];

  input.forEach((line) => {
    let firstDigit = "";
    let lastDigit = "";

    numberInWords.forEach((numberInWord) => {
      line = line.replace(
        new RegExp(numberInWord.word, "g"),
        numberInWord.value
      );
    });

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

interface numberInWords {
  word: string;
  value: string;
}
