const input = Deno.readTextFileSync("./03/input.txt")
  .split("\n")
  .map((line) => line.trim().split(""));

let sum = 0;

input.forEach((line, _index) => {
  const numsWithIndexes: Record<string, number[]>[] = [];
  for (let i = 0; i < line.length; i++) {
    let num = "";
    const indexes = [];
    const char = line[i];
    if (!isNaN(parseInt(char))) {
      while (!isNaN(parseInt(line[i]))) {
        num += line[i];
        indexes.push(i);
        i++;
      }
    }
    if (num) {
      const numWithIndex: Record<string, number[]> = {};
      numWithIndex[num] = indexes;
      numsWithIndexes.push(numWithIndex);
    }
  }
  for (let j = 0; j < numsWithIndexes.length; j++) {
    const adjacentNums = [];
    const numWithIndex = numsWithIndexes[j];
    const num = Object.keys(numWithIndex)[0];
    const indexes = numWithIndex[num];
    for (
      let i = _index === 0 ? _index : _index - 1;
      i < (_index === input.length - 1 ? _index + 1 : _index + 2);
      i++
    ) {
      if (i === _index) {
        adjacentNums.push(input[i][indexes[0] - 1]);
        adjacentNums.push(input[i][indexes[0] + num.length]);
      } else {
        for (let k = indexes[0] - 1; k < indexes[0] + num.length + 1; k++) {
          adjacentNums.push(input[i][k]);
        }
      }
    }
    if (
      adjacentNums
        .filter((char) => char)
        .some((char) => isNaN(parseInt(char)) && char !== ".")
    ) {
      sum += parseInt(num);
    }
  }
});

console.log(sum);
