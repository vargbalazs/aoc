const sds: string = "79 14 55 13";

const sdToSl: string[] = ["50 98 2", "52 50 48"];

const slToFert: string[] = ["0 15 37", "37 52 2", "39 0 15"];

const fertToWat: string[] = ["49 53 8", "0 11 42", "42 0 7", "57 7 4"];

const watToLight: string[] = ["88 18 7", "18 25 70"];

const ligthToTemp: string[] = ["45 77 23", "81 45 19", "68 64 13"];

const tempToHum: string[] = ["0 69 1", "1 0 69"];

const humToLoc: string[] = ["60 56 37", "56 93 4"];

function solved5t1(): number {
  const seeds = sds.split(" ");
  let minLoc = 0;

  for (let i = 0; i <= seeds.length - 1; i++) {
    const seed = +seeds[i];
    let soil = 0;
    let fert = 0;
    let wat = 0;
    let light = 0;
    let temp = 0;
    let hum = 0;
    let loc = 0;

    for (let j = 0; j <= sdToSl.length - 1; j++) {
      const line = sdToSl[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (seed >= source && seed <= source + range - 1) {
        soil = seed + dest - source;
        break;
      } else {
        soil = seed;
      }
    }

    for (let j = 0; j <= slToFert.length - 1; j++) {
      const line = slToFert[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (soil >= source && soil <= source + range - 1) {
        fert = soil + dest - source;
        break;
      } else {
        fert = soil;
      }
    }

    for (let j = 0; j <= fertToWat.length - 1; j++) {
      const line = fertToWat[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (fert >= source && fert <= source + range - 1) {
        wat = fert + dest - source;
        break;
      } else {
        wat = fert;
      }
    }

    for (let j = 0; j <= watToLight.length - 1; j++) {
      const line = watToLight[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (wat >= source && wat <= source + range - 1) {
        light = wat + dest - source;
        break;
      } else {
        light = wat;
      }
    }

    for (let j = 0; j <= ligthToTemp.length - 1; j++) {
      const line = ligthToTemp[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (light >= source && light <= source + range - 1) {
        temp = light + dest - source;
        break;
      } else {
        temp = light;
      }
    }

    for (let j = 0; j <= tempToHum.length - 1; j++) {
      const line = tempToHum[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (temp >= source && temp <= source + range - 1) {
        hum = temp + dest - source;
        break;
      } else {
        hum = temp;
      }
    }

    for (let j = 0; j <= humToLoc.length - 1; j++) {
      const line = humToLoc[j].split(" ");
      const dest = +line[0];
      const source = +line[1];
      const range = +line[2];

      if (hum >= source && hum <= source + range - 1) {
        loc = hum + dest - source;
        break;
      } else {
        loc = hum;
      }
    }

    if (minLoc === 0) minLoc = loc;
    if (loc < minLoc) minLoc = loc;
  }

  return minLoc;
}
