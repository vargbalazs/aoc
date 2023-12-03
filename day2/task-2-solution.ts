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

function solved2t2(input: string[]): number {
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

  let sumPower = 0;

  games.forEach((game) => {
    let power = 1;

    let subSets: Ball[] = [];

    game.subsets.forEach((subSet) => {
      subSets.push(...subSet.set);
    });

    const groupedByColors = subSets.reduce(
      (group: { [key: string]: Ball[] }, item) => {
        if (!group[item.color]) {
          group[item.color] = [];
        }
        group[item.color].push(item);
        return group;
      },
      {}
    );

    Object.entries(groupedByColors).forEach((group) => {
      const max = group[1].reduce((ball1, ball2) =>
        ball1.amount > ball2.amount ? ball1 : ball2
      );

      power *= max.amount;
    });

    sumPower += power;
  });

  return sumPower;
}
