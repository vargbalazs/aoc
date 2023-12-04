interface Card {
  id: number;
  winningCards: number;
  copiedCards?: Card[];
}

let cards: Card[] = [];

function solved4t2(input: string[]): number {
  let totalPoints = 0;

  input.forEach((line) => {
    const cardNumber = line.substring(0, line.indexOf(":"));
    cards.push({ id: +cardNumber.split(" ")[1], winningCards: 0 });

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

  let totalWinningCards = 0;

  for (let card of cards) {
  }

  return totalPoints;
}

function getCard(id: number): Card {
  return cards.find((card) => card.id === id)!;
}

function getWinningCards(card: Card) {}
