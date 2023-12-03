interface Char {
  value: string;
  hasAdjacentSymbol: boolean;
  isNumber: boolean;
  group: number;
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
        }
      }

      chars.push(char);
    }
  }

  let number = "";
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

  Object.entries(grouped).forEach((group) => {
    let number = "";
    if (group[1].some((char) => char.hasAdjacentSymbol)) {
      group[1].forEach((char) => (number = number.concat(char.value)));
    }
    sumOfPartNumber += +number;
  });

  return sumOfPartNumber;
}

function isSymbol(char: string): boolean {
  return !!isNaN(+char) && char !== ".";
}

function isNumber(char: string): boolean {
  return !isNaN(+char);
}
