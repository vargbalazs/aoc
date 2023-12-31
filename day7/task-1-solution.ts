const cards = ["32T3K 765", "T55J5 684", "KK677 28", "KTJJT 220", "QQQJA 483"];

interface Card {
  value: string;
  bid: number;
  strength: number;
  rank: number;
}

function solved7t1(): number {
  const rankedCards: Card[] = [];

  for (let i = 0; i <= cards.length - 1; i++) {
    let card: Card = { value: "", bid: 0, strength: 0, rank: 0 };
    card.value = cards[i].split(" ")[0];
    card.bid = +cards[i].split(" ")[1];

    if (fiveOfAKind(card.value)) card.strength = 7;
    if (fourOfAKind(card.value)) card.strength = 6;
    if (fullHouse(card.value)) card.strength = 5;
    if (threeOfAKind(card.value)) card.strength = 4;
    if (twoPair(card.value)) card.strength = 3;
    if (onePair(card.value)) card.strength = 2;
    if (highCard(card.value)) card.strength = 1;

    rankedCards.push(card);
  }

  rankedCards.sort((card1, card2) => {
    if (card1.strength > card2.strength) return 1;
    if (card1.strength < card2.strength) return -1;
    return 0;
  });

  const groupedByStrength = rankedCards.reduce(
    (group: { [key: string]: Card[] }, item) => {
      if (!group[item.strength]) {
        group[item.strength] = [];
      }
      group[item.strength].push(item);
      return group;
    },
    {}
  );

  let rank = 1;

  Object.entries(groupedByStrength).forEach((group) => {
    if (group[1].length === 1) {
      let card = group[1][0];
      setRank(card.value, rankedCards, rank);
      rank++;
    }
    if (group[1].length > 1) {
      const cardsWithSameStrength = group[1];
      let swapped: boolean;
      let temp: Card;
      for (let i = 0; i < cardsWithSameStrength.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < cardsWithSameStrength.length - i - 1; j++) {
          if (
            firstCardIsStronger(
              cardsWithSameStrength[j].value,
              cardsWithSameStrength[j + 1].value
            )
          ) {
            temp = cardsWithSameStrength[j];
            cardsWithSameStrength[j] = cardsWithSameStrength[j + 1];
            cardsWithSameStrength[j + 1] = temp;
            swapped = true;
          }
        }
        if (swapped == false) break;
      }
      for (let i = 0; i <= cardsWithSameStrength.length - 1; i++) {
        setRank(cardsWithSameStrength[i].value, rankedCards, rank);
        rank++;
      }
    }
  });

  let winnings = 0;

  for (let i = 0; i <= rankedCards.length - 1; i++) {
    winnings += rankedCards[i].bid * rankedCards[i].rank;
  }

  return winnings;
}

function firstCardIsStronger(value1: string, value2: string): boolean {
  const labels = new Map<string, number>([
    ["A", 13],
    ["K", 12],
    ["Q", 11],
    ["J", 10],
    ["T", 9],
    ["9", 8],
    ["8", 7],
    ["7", 6],
    ["6", 5],
    ["5", 4],
    ["4", 3],
    ["3", 2],
    ["2", 1],
  ]);

  for (let i = 0; i <= 4; i++) {
    if (value1[i] !== value2[i])
      return labels.get(value1[i])! > labels.get(value2[i])!;
  }

  return false;
}

function setRank(value: string, cards: Card[], rank: number) {
  cards.map((card) => {
    if (card.value === value) card.rank = rank;
  });
}

function fiveOfAKind(value: string) {
  return value.split("").every((c) => c === value[0]);
}

function fourOfAKind(value: string) {
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    if (count === 4) return true;
  }
  return false;
}

function fullHouse(value: string) {
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    if (count === 3) {
      value = value.replace(new RegExp(value.charAt(i), "g"), "");
      return value[0] === value[1];
    }
  }
  return false;
}

function threeOfAKind(value: string) {
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    if (count === 3) {
      value = value.replace(new RegExp(value.charAt(i), "g"), "");
      return value[0] !== value[1];
    }
  }
  return false;
}

function twoPair(value: string) {
  let firstPair = "";
  let secondPair = "";
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    if (count === 2) {
      firstPair = value.charAt(i);
      value = value.replace(new RegExp(value.charAt(i), "g"), "");
      break;
    }
  }
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    if (count === 2) {
      secondPair = value.charAt(i);
      value = value.replace(new RegExp(value.charAt(i), "g"), "");
      break;
    }
  }

  return (
    firstPair !== "" &&
    secondPair !== "" &&
    firstPair !== secondPair &&
    value[0] !== firstPair &&
    value[0] !== secondPair
  );
}

function onePair(value: string) {
  let pair = "";
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    if (count === 2) {
      pair = value.charAt(i);
      value = value.replace(new RegExp(value.charAt(i), "g"), "");
      break;
    }
  }
  let set = new Set(value.split(""));

  return (
    pair !== "" &&
    value[0] !== pair &&
    value[1] !== pair &&
    value[2] !== pair &&
    set.size === 3
  );
}

function highCard(value: string) {
  return new Set(value.split("")).size === 5;
}
