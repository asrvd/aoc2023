const input = Deno.readTextFileSync("./03/input.txt")
  .split("\n")
  .map((line) => line.trim().split(""));

let sum = 0;

input.forEach((line, r) => {
  line.forEach((char, c) => {
    if (char === "*") {
      const adjacentNumbers = new Set<number>(); // need to use a set to avoid duplicates

      for (let i = r - 1; i < r + 2; i++) {
        for (let j = c - 1; j < c + 2; j++) {
          if (
            i < 0 ||
            j < 0 ||
            i >= input.length ||
            j >= line.length ||
            isNaN(parseInt(input[i][j]))
          ) {
            continue;
          }

          // get the whole number which is adjacent to the current asterisk
          let k = j;

          while (k > 0 && !isNaN(parseInt(input[i][k - 1]))) {
            k--;
          }

          let num = "";
          while (!isNaN(parseInt(input[i][k]))) {
            num += input[i][k];
            k++;
          }

          adjacentNumbers.add(parseInt(num));
        }
      }

      if (adjacentNumbers.size === 2) {
        sum += [...adjacentNumbers].reduce((a, b) => a * b);
      }
    }
  });
});

console.log(sum);
