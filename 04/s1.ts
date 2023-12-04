const input = Deno.readTextFileSync("./04/input.txt")
  .split("\n")
  .map((x) => x.trim());

let sum = 0;

const cards = input.map((x) => x.split(": ")[1]);
for (const card of cards) {
  const [winning, all] = card
    .split(" | ")
    .map((x) => x.split(" ").filter((y) => y !== ""));
  let point = 0;
  for (let i = 0; i < all.length; i++) {
    if (winning.includes(all[i])) {
      if (point === 0) {
        point += 1;
      } else {
        point *= 2;
      }
    }
  }
  sum += point;
}

console.log(sum);
