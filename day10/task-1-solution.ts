const mazeInput = ["..F7.", ".FJ|.", "SJ.L7", "|F--J", "LJ..."];

interface Tile {
  x: number;
  y: number;
  value: string;
  comingFrom: "north" | "south" | "east" | "west" | "";
}

function solved10t1(): number {
  const maze: string[][] = [];
  let sPoz: Tile = { x: 0, y: 0, value: "", comingFrom: "" };

  for (let i = 0; i <= mazeInput.length - 1; i++) {
    maze.push(mazeInput[i].split(""));
    for (let j = 0; j <= maze[i].length - 1; j++) {
      if (maze[i][j] === "S") {
        sPoz.x = j;
        sPoz.y = i;
        sPoz.value = "S";
      }
    }
  }

  let nextTile: Tile = { x: 0, y: 0, value: "", comingFrom: "" };
  let distance = 0;

  // north
  if (
    maze[sPoz.y - 1][sPoz.x] === "|" ||
    maze[sPoz.y - 1][sPoz.x] === "7" ||
    maze[sPoz.y - 1][sPoz.x] === "F"
  ) {
    nextTile.y = sPoz.y - 1;
    nextTile.x = sPoz.x;
    nextTile.value = maze[sPoz.y - 1][sPoz.x];
    nextTile.comingFrom = "south";
  }

  // south
  if (
    maze[sPoz.y + 1][sPoz.x] === "|" ||
    maze[sPoz.y + 1][sPoz.x] === "L" ||
    maze[sPoz.y + 1][sPoz.x] === "J"
  ) {
    nextTile.y = sPoz.y + 1;
    nextTile.x = sPoz.x;
    nextTile.value = maze[sPoz.y + 1][sPoz.x];
    nextTile.comingFrom = "north";
  }

  // west
  if (
    maze[sPoz.y][sPoz.x - 1] === "-" ||
    maze[sPoz.y][sPoz.x - 1] === "L" ||
    maze[sPoz.y][sPoz.x - 1] === "F"
  ) {
    nextTile.y = sPoz.y;
    nextTile.x = sPoz.x - 1;
    nextTile.value = maze[sPoz.y][sPoz.x - 1];
    nextTile.comingFrom = "east";
  }

  // east
  if (
    maze[sPoz.y][sPoz.x + 1] === "-" ||
    maze[sPoz.y][sPoz.x + 1] === "J" ||
    maze[sPoz.y][sPoz.x + 1] === "7"
  ) {
    nextTile.y = sPoz.y;
    nextTile.x = sPoz.x + 1;
    nextTile.value = maze[sPoz.y][sPoz.x + 1];
    nextTile.comingFrom = "west";
  }

  distance++;

  while (nextTile.value !== "S") {
    nextTile = findNextTile(nextTile, maze);
    distance++;
  }

  return distance / 2;
}

function findNextTile(currentTile: Tile, maze: string[][]): Tile {
  let nextTile: Tile = { x: 0, y: 0, value: "", comingFrom: "" };

  switch (currentTile.value) {
    case "|":
      if (currentTile.comingFrom === "south")
        nextTile = {
          x: currentTile.x,
          y: currentTile.y - 1,
          value: maze[currentTile.y - 1][currentTile.x],
          comingFrom: "south",
        };
      if (currentTile.comingFrom === "north")
        nextTile = {
          x: currentTile.x,
          y: currentTile.y + 1,
          value: maze[currentTile.y + 1][currentTile.x],
          comingFrom: "north",
        };
      break;
    case "-":
      if (currentTile.comingFrom === "east")
        nextTile = {
          x: currentTile.x - 1,
          y: currentTile.y,
          value: maze[currentTile.y][currentTile.x - 1],
          comingFrom: "east",
        };
      if (currentTile.comingFrom === "west")
        nextTile = {
          x: currentTile.x + 1,
          y: currentTile.y,
          value: maze[currentTile.y][currentTile.x + 1],
          comingFrom: "west",
        };
      break;
    case "L":
      if (currentTile.comingFrom === "east")
        nextTile = {
          x: currentTile.x,
          y: currentTile.y - 1,
          value: maze[currentTile.y - 1][currentTile.x],
          comingFrom: "south",
        };
      if (currentTile.comingFrom === "north")
        nextTile = {
          x: currentTile.x + 1,
          y: currentTile.y,
          value: maze[currentTile.y][currentTile.x + 1],
          comingFrom: "west",
        };
      break;
    case "J":
      if (currentTile.comingFrom === "west")
        nextTile = {
          x: currentTile.x,
          y: currentTile.y - 1,
          value: maze[currentTile.y - 1][currentTile.x],
          comingFrom: "south",
        };
      if (currentTile.comingFrom === "north")
        nextTile = {
          x: currentTile.x - 1,
          y: currentTile.y,
          value: maze[currentTile.y][currentTile.x - 1],
          comingFrom: "east",
        };
      break;
    case "7":
      if (currentTile.comingFrom === "south")
        nextTile = {
          x: currentTile.x - 1,
          y: currentTile.y,
          value: maze[currentTile.y][currentTile.x - 1],
          comingFrom: "east",
        };
      if (currentTile.comingFrom === "west")
        nextTile = {
          x: currentTile.x,
          y: currentTile.y + 1,
          value: maze[currentTile.y + 1][currentTile.x],
          comingFrom: "north",
        };
      break;
    case "F":
      if (currentTile.comingFrom === "south")
        nextTile = {
          x: currentTile.x + 1,
          y: currentTile.y,
          value: maze[currentTile.y][currentTile.x + 1],
          comingFrom: "west",
        };
      if (currentTile.comingFrom === "east")
        nextTile = {
          x: currentTile.x,
          y: currentTile.y + 1,
          value: maze[currentTile.y + 1][currentTile.x],
          comingFrom: "north",
        };
      break;
  }

  return nextTile;
}
