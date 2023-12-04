const input = Deno.readTextFileSync("./04/input.txt")
  .split("\n")
  .map((x) => x.trim());

const cards = input.map((x) => x.split(": ")[1]);

const cardsWon: number[] = Array(cards.length).fill(1);

for (let j = 0; j < cards.length; j++) {
  const card = cards[j];
  const [winning, all] = card
    .split(" | ")
    .map((x) => x.split(" ").filter((y) => y !== ""));

  let matches = 0;
  for (let i = 0; i < all.length; i++) {
    if (winning.includes(all[i])) {
      matches += 1;
    }
  }

  if (matches === 0) {
    continue;
  }

  let k = j + 1;
  for (let i = 0; i < matches; i++) {
    if (cardsWon[j] !== 1) {
      cardsWon[k] += 1 + (cardsWon[j] - 1);
    } else {
      cardsWon[k] += 1;
    }
    k++;
  }
}

console.log(cardsWon.reduce((a, b) => a + b, 0));
