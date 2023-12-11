interface Card {
  id?: number;
  winningCards?: number;
  copiedCards?: Card[];
}

let cards: Card[] = [];

function solved4t2(input: string[]): number {
  let totalPoints = 0;

  input.forEach((line) => {
    const cardNumber = line.substring(0, line.indexOf(":"));
    cards.push({
      id: +cardNumber.replace("Card", ""),
      winningCards: 0,
      copiedCards: [],
    });

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

    cards[cards.length - 1].winningCards = winningCards;
  });

  for (let i = 0; i <= cards.length - 1; i++) {}

  return 0;
}
