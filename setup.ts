// Example usage: deno task setup 1

if (Deno.args.length !== 1) {
  console.error("Please provide a day number.");
  Deno.exit(1);
}

const day = Deno.args[0].padStart(2, "0");

await Deno.mkdir(`./${day}`, { recursive: true });
await Deno.create(`./${day}/input.txt`);
await Deno.create(`./${day}/solution.ts`);

// add a new task in deno.json for the new day

const denoJson = await Deno.readTextFile("./deno.json");
const tasks = JSON.parse(denoJson).tasks;

tasks[`day${day}`] = `deno run --allow-all --unstable ./${day}/solution.ts`;

await Deno.writeTextFile("./deno.json", JSON.stringify({ tasks }, null, 2));

console.log(
  `Setup for day ${day} complete!\nRun 'deno task day${day}' to run the solution.`
);
Deno.exit(0);
