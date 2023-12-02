const i = Deno.readTextFileSync("./02/input.txt")
  .split("\n")
  .map((x) => x.trim());

let sum = 0;

const maxCubes = {
  red: 12,
  green: 13,
  blue: 14,
};

i.map((x, idx) => {
  const rounds = x.split(": ")[1].split("; ");

  let flag = true;

  rounds.forEach((round) => {
    const cubes = round
      .split(", ")
      .reduce((acc: Record<string, number>, cur) => {
        const [amount, color] = cur.split(" ");
        acc[color] = Number(amount);
        return acc;
      }, {});

    if (
      !Object.entries(cubes).every(
        ([color, amount]) => amount <= maxCubes[color as keyof typeof maxCubes]
      )
    ) {
      flag = false;
    }
  });

  if (flag) {
    sum += idx + 1;
  }
});

console.log(sum);
