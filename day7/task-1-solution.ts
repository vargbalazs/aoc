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

  return 0;
}

function fiveOfAKind(value: string) {
  return value.split("").every((c) => c === value[0]);
}

function fourOfAKind(value: string) {
  for (let i = 0; i <= value.length - 1; i++) {
    const count = value.split(value.charAt(i)).length - 1;
    return count === 4;
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
