const i = Deno.readTextFileSync("./01/input.txt");

const input = i.split("\n");
let sum = 0;

function getCalibration(s: string) {
  let firstDigit = "";
  let lastDigit = "";

  s.split("").forEach((c) => {
    if (!isNaN(parseInt(c))) {
      if (firstDigit === "") {
        firstDigit = c;
      } 
      lastDigit = c;
    }
  });

  return Number(firstDigit + lastDigit);
}

input.forEach((i) => {
  sum += getCalibration(i.trim());
});

console.log(sum);
