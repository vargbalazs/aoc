interface Ball {
  color: string;
  amount: number;
}

interface Subset {
  set: Ball[];
}

interface Game {
  id: number;
  subsets: Subset[];
}

function solved2t1(input: string[]): number {
  const redCube = 12;
  const greenCube = 13;
  const blueCube = 14;

  let games: Game[] = [];

  input.forEach((line) => {
    let game: Game = { id: 0, subsets: [] };

    const gameName = line.substring(0, line.indexOf(":"));
    game.id = +gameName.split(" ")[1];

    const subsets = line.substring(line.indexOf(":") + 1).split(";");

    subsets.forEach((subs) => {
      let subset: Subset = { set: [] };

      const balls = subs.split(",");

      balls.forEach((b) => {
        const ball: Ball = { color: b.split(" ")[2], amount: +b.split(" ")[1] };
        subset.set!.push(ball);
      });

      game.subsets?.push(subset);
    });

    games.push(game);
  });

  let gameIdSum = 0;

  games.forEach((game) => {
    let gameIsPossible = true;

    game.subsets.forEach((subSet) => {
      for (let ball of subSet.set) {
        let setIsPossible = true;
        let red = true;
        let green = true;
        let blue = true;

        switch (ball.color) {
          case "red":
            red = ball.amount <= redCube;
          case "green":
            green = ball.amount <= greenCube;
          case "blue":
            blue = ball.amount <= blueCube;
        }

        setIsPossible = red && green && blue;

        if (!setIsPossible) {
          gameIsPossible = false;
          break;
        }
      }
    });

    if (gameIsPossible) gameIdSum += game.id;
  });

  return gameIdSum;
}
