// Example usage: deno task setup 1

if (Deno.args.length !== 1) {
  console.error("Please provide a day number.");
  Deno.exit(1);
}

const day = Deno.args[0].padStart(2, "0");

await Deno.mkdir(`./${day}`, { recursive: true });
await Deno.create(`./${day}/input.txt`);
await Deno.create(`./${day}/solution.ts`);

console.log(`Setup for day ${day} complete!`);
Deno.exit(0);
