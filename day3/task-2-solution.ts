interface Char {
  value: string;
  hasAdjacentSymbol: boolean;
  isNumber: boolean;
  group: number;
  symbol: string;
  symbolX: number;
  symbolY: number;
  coord: string;
}

function solved3t1(input: string[]): number {
  let lines: string[] = [];
  let sumOfPartNumber = 0;
  let chars: Char[] = [];

  input.forEach((line) => {
    lines.push(line);
  });

  let index = 0;

  for (let i = 0; i <= lines.length - 1; i++) {
    for (let j = 0; j <= lines[i].length - 1; j++) {
      let char: Char = {
        value: lines[i].charAt(j),
        hasAdjacentSymbol: false,
        isNumber: false,
        group: 0,
        symbol: "",
        symbolX: -1,
        symbolY: -1,
        coord: "",
      };
      char.isNumber = isNumber(char.value);
      // első sor
      if (i === 0) {
        // sor eleje
        if (j === 0) {
          if (
            isSymbol(lines[i + 1].charAt(j)) ||
            isSymbol(lines[i + 1].charAt(j + 1)) ||
            isSymbol(lines[i].charAt(j + 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i + 1].charAt(j))) {
            char.symbol = lines[i + 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j + 1))) {
            char.symbol = lines[i + 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j + 1))) {
            char.symbol = lines[i].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
        // köztes
        if (j > 0 && j < lines[i].length - 1) {
          if (
            isSymbol(lines[i + 1].charAt(j)) ||
            isSymbol(lines[i + 1].charAt(j - 1)) ||
            isSymbol(lines[i + 1].charAt(j + 1)) ||
            isSymbol(lines[i].charAt(j - 1)) ||
            isSymbol(lines[i].charAt(j + 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i + 1].charAt(j))) {
            char.symbol = lines[i + 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j - 1))) {
            char.symbol = lines[i + 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j + 1))) {
            char.symbol = lines[i + 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j - 1))) {
            char.symbol = lines[i].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j + 1))) {
            char.symbol = lines[i].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
        // sor vége
        if (j === lines[i].length - 1) {
          if (
            isSymbol(lines[i + 1].charAt(j)) ||
            isSymbol(lines[i + 1].charAt(j - 1)) ||
            isSymbol(lines[i].charAt(j - 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i + 1].charAt(j))) {
            char.symbol = lines[i + 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j - 1))) {
            char.symbol = lines[i + 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j - 1))) {
            char.symbol = lines[i].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
      }

      // köztes sorok
      if (i > 0 && i < lines.length - 1) {
        // sor eleje
        if (j === 0) {
          if (
            isSymbol(lines[i - 1].charAt(j)) ||
            isSymbol(lines[i - 1].charAt(j + 1)) ||
            isSymbol(lines[i + 1].charAt(j)) ||
            isSymbol(lines[i + 1].charAt(j + 1)) ||
            isSymbol(lines[i].charAt(j + 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i - 1].charAt(j))) {
            char.symbol = lines[i - 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j + 1))) {
            char.symbol = lines[i - 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j))) {
            char.symbol = lines[i + 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j + 1))) {
            char.symbol = lines[i + 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j + 1))) {
            char.symbol = lines[i].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
        // köztes
        if (j > 0 && j < lines[i].length - 1) {
          if (
            isSymbol(lines[i - 1].charAt(j)) ||
            isSymbol(lines[i - 1].charAt(j + 1)) ||
            isSymbol(lines[i - 1].charAt(j - 1)) ||
            isSymbol(lines[i + 1].charAt(j)) ||
            isSymbol(lines[i + 1].charAt(j + 1)) ||
            isSymbol(lines[i + 1].charAt(j - 1)) ||
            isSymbol(lines[i].charAt(j + 1)) ||
            isSymbol(lines[i].charAt(j - 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i - 1].charAt(j))) {
            char.symbol = lines[i - 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j + 1))) {
            char.symbol = lines[i - 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j - 1))) {
            char.symbol = lines[i - 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j))) {
            char.symbol = lines[i + 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j + 1))) {
            char.symbol = lines[i + 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j - 1))) {
            char.symbol = lines[i + 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j + 1))) {
            char.symbol = lines[i].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j - 1))) {
            char.symbol = lines[i].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
        // sor vége
        if (j === lines[i].length - 1) {
          if (
            isSymbol(lines[i - 1].charAt(j)) ||
            isSymbol(lines[i - 1].charAt(j - 1)) ||
            isSymbol(lines[i + 1].charAt(j)) ||
            isSymbol(lines[i + 1].charAt(j - 1)) ||
            isSymbol(lines[i].charAt(j - 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i - 1].charAt(j))) {
            char.symbol = lines[i - 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j - 1))) {
            char.symbol = lines[i - 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j))) {
            char.symbol = lines[i + 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i + 1].charAt(j - 1))) {
            char.symbol = lines[i + 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i + 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j - 1))) {
            char.symbol = lines[i].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
      }

      // utolsó sor
      if (i === lines.length - 1) {
        // sor eleje
        if (j === 0) {
          if (
            isSymbol(lines[i - 1].charAt(j)) ||
            isSymbol(lines[i - 1].charAt(j + 1)) ||
            isSymbol(lines[i].charAt(j + 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i - 1].charAt(j))) {
            char.symbol = lines[i - 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j + 1))) {
            char.symbol = lines[i - 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j + 1))) {
            char.symbol = lines[i].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
        // köztes
        if (j > 0 && j < lines[i].length - 1) {
          if (
            isSymbol(lines[i - 1].charAt(j)) ||
            isSymbol(lines[i - 1].charAt(j - 1)) ||
            isSymbol(lines[i - 1].charAt(j + 1)) ||
            isSymbol(lines[i].charAt(j - 1)) ||
            isSymbol(lines[i].charAt(j + 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i - 1].charAt(j))) {
            char.symbol = lines[i - 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j - 1))) {
            char.symbol = lines[i - 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j + 1))) {
            char.symbol = lines[i - 1].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j - 1))) {
            char.symbol = lines[i].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j + 1))) {
            char.symbol = lines[i].charAt(j + 1);
            char.symbolX = j + 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
        // sor vége
        if (j === lines[i].length - 1) {
          if (
            isSymbol(lines[i - 1].charAt(j)) ||
            isSymbol(lines[i - 1].charAt(j - 1)) ||
            isSymbol(lines[i].charAt(j - 1))
          ) {
            char.hasAdjacentSymbol = true;
          }
          if (isSymbol(lines[i - 1].charAt(j))) {
            char.symbol = lines[i - 1].charAt(j);
            char.symbolX = j;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i - 1].charAt(j - 1))) {
            char.symbol = lines[i - 1].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i - 1;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
          if (isSymbol(lines[i].charAt(j - 1))) {
            char.symbol = lines[i].charAt(j - 1);
            char.symbolX = j - 1;
            char.symbolY = i;
            char.coord = `${char.symbolX}-${char.symbolY}`;
          }
        }
      }

      chars.push(char);
    }
  }

  let number1 = "";
  let number2 = "";
  let enginePartNumber: Char[] = [];

  for (let i = 0; i <= chars.length - 1; i++) {
    if (chars[i].isNumber) {
      chars[i].group = index;
      enginePartNumber.push(chars[i]);
    } else {
      index++;
    }
  }

  const grouped = enginePartNumber.reduce(
    (group: { [key: string]: Char[] }, item) => {
      if (!group[item.group]) {
        group[item.group] = [];
      }
      group[item.group].push(item);
      return group;
    },
    {}
  );

  const groupsWithStar = Object.entries(grouped).filter(
    (group) =>
      group[1].some((char) => char.hasAdjacentSymbol) &&
      group[1].some((char) => isStar(char.symbol))
  );

  let tempGroups: Char[] = [];

  for (let i = 0; i <= groupsWithStar.length - 1; i++) {
    let charWithCoord = groupsWithStar[i][1].find((char) => char.coord !== "");
    groupsWithStar[i][1].forEach((char) => {
      char.coord = charWithCoord?.coord!;
    });
    tempGroups.push(...groupsWithStar[i][1]);
  }

  const groupedByCoord = tempGroups.reduce(
    (group: { [key: string]: Char[] }, item) => {
      if (!group[item.coord]) {
        group[item.coord] = [];
      }
      group[item.coord].push(item);
      return group;
    },
    {}
  );

  Object.entries(groupedByCoord).forEach((item) => {
    const groupedByGroup = item[1].reduce(
      (group: { [key: string]: Char[] }, item) => {
        if (!group[item.group]) {
          group[item.group] = [];
        }
        group[item.group].push(item);
        return group;
      },
      {}
    );
    if (Object.values(groupedByGroup).length === 2) {
      Object.values(groupedByGroup)[0].forEach((char) => {
        number1 = number1.concat(char.value);
      });
      Object.values(groupedByGroup)[1].forEach((char) => {
        number2 = number2.concat(char.value);
      });
      sumOfPartNumber += +number1 * +number2;
      number1 = "";
      number2 = "";
    }
  });

  return sumOfPartNumber;
}

function isSymbol(char: string): boolean {
  return !!isNaN(+char) && char !== ".";
}

function isNumber(char: string): boolean {
  return !isNaN(+char);
}

function isStar(char: string) {
  return char === "*";
}
