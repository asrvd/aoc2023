const i = Deno.readTextFileSync("./02/input.txt")
  .split("\n")
  .map((x) => x.trim());

let sum = 0;

i.map((x) => {
  const rounds = x.split(": ")[1].split("; ");

  let power = 0;

  const maxCubes = {
    red: 0,
    green: 0,
    blue: 0,
  };

  rounds.forEach((round) => {
    round.split(", ").map((x) => {
      const [amount, color] = x.split(" ");

      maxCubes[color as keyof typeof maxCubes] = Math.max(
        maxCubes[color as keyof typeof maxCubes],
        Number(amount)
      );
    });
  });

  power = maxCubes.red * maxCubes.green * maxCubes.blue;

  sum += power;
});

console.log(sum);
