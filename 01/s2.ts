const i = Deno.readTextFileSync("./01/input.txt");

const input = i.split("\n");

let sum = 0;

const digits = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function getCalibration(s: string) {
  const digitsFound: string[] = [];

  const d = s.matchAll(
    /(?=(one|two|three|four|five|six|seven|eight|nine|zero|\d))/g
  ); // look ahead cus the digits are overlapping 😭

  for (const match of d) {
    if (digits.includes(match[1])) {
      digitsFound.push((digits.indexOf(match[1]) + 1).toString());
    } else {
      digitsFound.push(match[1]);
    }
  }

  return Number(digitsFound[0] + digitsFound[digitsFound.length - 1]);
}

input.forEach((i) => {
  sum += getCalibration(i.trim());
});

console.log(sum);
