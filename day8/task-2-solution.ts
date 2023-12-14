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
  let nextNodes: NetworkNode[] = [];
  let nextNode: NetworkNode = { id: "", left: "", right: "" };
  let allEndsWithZ = false;
  let steps = 0;

  Object.assign(nextNodes, nodesWithA);

  while (!allEndsWithZ) {
    for (let i = 0; i <= inst.length - 1; i++) {
      for (let j = 0; j <= nodesWithA.length - 1; j++) {
        nextNode = nextNodes[j];
        if (inst[i] === "L") {
          nextNode = findNode(nextNode.left, nodes);
          nextNodes[j] = nextNode;
        }
        if (inst[i] === "R") {
          nextNode = findNode(nextNode.right, nodes);
          nextNodes[j] = nextNode;
        }
      }
      allEndsWithZ = checkForZ(nextNodes);
      steps++;
    }
  }

  return steps;
}

function findNode(id: string, nodes: NetworkNode[]): NetworkNode {
  return nodes.find((node) => node.id === id)!;
}

function checkForZ(nodes: NetworkNode[]) {
  return nodes.every((node) => node.id[2] === "Z");
}
