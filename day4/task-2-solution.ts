interface Card {
  id?: number;
  winningCards?: number;
}

let originalCards: Card[] = [];
let totalPoints = 0;
let temp: Card[] = [];
let temp2: Card[] = [];

function solved4t2(input: string[]): number {
  input.forEach((line) => {
    const cardNumber = line.substring(0, line.indexOf(":"));
    originalCards.push({
      id: +cardNumber.replace("Card", ""),
      winningCards: 0,
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

    originalCards[originalCards.length - 1].winningCards = winningCards;
  });

  totalPoints += originalCards.length;

  Object.assign(temp2, originalCards);

  getCardNumbers(originalCards);

  return totalPoints;
}

function getCardNumbers(cards: Card[]) {
  if (cards.length === 0) return;
  temp = [];
  for (let i = 0; i <= cards.length - 1; i++) {
    let winningCards = getCard(cards[i].id!).winningCards!;
    totalPoints += winningCards;
    if (winningCards > 0) {
      for (let j = 1; j <= winningCards; j++) {
        temp.push(getCard(cards[i].id! + j));
      }
    }
  }
  getCardNumbers(temp);
}

function getCard(id: number): Card {
  return temp2.find((card) => card.id === id)!;
}
