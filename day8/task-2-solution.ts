const inst = "LR";
const map = [
  "11A = (11B, XXX)",
  "11B = (XXX, 11Z)",
  "11Z = (11B, XXX)",
  "22A = (22B, XXX)",
  "22B = (22C, 22C)",
  "22C = (22Z, 22Z)",
  "22Z = (22B, 22B)",
  "XXX = (XXX, XXX)",
];

interface NetworkNode {
  id: string;
  left: string;
  right: string;
}

function solved8t2(): number {
  const nodes: NetworkNode[] = [];

  for (let i = 0; i <= map.length - 1; i++) {
    let id = map[i].split(" ")[0];
    let left = map[i].substring(
      map[i].indexOf("(") + 1,
      map[i].indexOf("(") + 4
    );
    let right = map[i]
      .substring(map[i].indexOf(",") + 2, map[i].indexOf(",") + 5)
      .trim();

    nodes.push({ id: id, left: left, right: right });
  }

  const nodesWithA = nodes.filter((node) => node.id[2] === "A");
  let nextNode: NetworkNode = { id: "", left: "", right: "" };
  let steps = 0;
  const stepsToZ: number[] = [];
  let foundZ = false;

  for (let i = 0; i <= nodesWithA.length - 1; i++) {
    nextNode = nodesWithA[i];
    steps = 0;
    foundZ = false;
    while (!foundZ) {
      for (let j = 0; j <= inst.length - 1; j++) {
        if (inst[j] === "L") nextNode = findNode(nextNode.left, nodes);
        if (inst[j] === "R") nextNode = findNode(nextNode.right, nodes);
        steps++;
        if (nextNode.id[2] === "Z") {
          stepsToZ.push(steps);
          foundZ = true;
          break;
        }
      }
    }
  }

  steps = stepsToZ.reduce((a, b) => lcm(a, b));

  return steps;
}

function findNode(id: string, nodes: NetworkNode[]): NetworkNode {
  return nodes.find((node) => node.id === id)!;
}

function gcd(a: number, b: number) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

function lcm(a: number, b: number) {
  return (a / gcd(a, b)) * b;
}
