const inst = "RL";
const map = [
  "AAA = (BBB, CCC)",
  "BBB = (DDD, EEE)",
  "CCC = (ZZZ, GGG)",
  "DDD = (DDD, DDD)",
  "EEE = (EEE, EEE)",
  "GGG = (GGG, GGG)",
  "ZZZ = (ZZZ, ZZZ)",
];

interface NetworkNode {
  id: string;
  left: string;
  right: string;
}

function solved8t1(): number {
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

  let startNode = findNode("AAA", nodes);
  let nextNode: NetworkNode = { id: "", left: "", right: "" };
  let steps = 0;
  let zzzFound = false;

  while (!zzzFound) {
    for (let i = 0; i <= inst.length - 1; i++) {
      steps++;
      if (inst[i] === "R") {
        if (startNode.right === "ZZZ") {
          zzzFound = true;
          break;
        } else {
          nextNode = findNode(startNode.right, nodes);
        }
      }
      if (inst[i] === "L") {
        if (startNode.left === "ZZZ") {
          zzzFound = true;
          break;
        } else {
          nextNode = findNode(startNode.left, nodes);
        }
      }
      startNode = nextNode;
    }
  }

  return steps;
}

function findNode(id: string, nodes: NetworkNode[]): NetworkNode {
  return nodes.find((node) => node.id === id)!;
}
