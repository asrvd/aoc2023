// Example usage: deno task setup 1

if (Deno.args.length !== 1) {
  console.error("Please provide a day number.");
  Deno.exit(1);
}

const day = Deno.args[0].padStart(2, "0");

await Deno.mkdir(`./${day}`, { recursive: true });
await Deno.create(`./${day}/input.txt`);
await Deno.create(`./${day}/s1.ts`);
await Deno.create(`./${day}/s2.ts`);

// add/edit tasks in deno.json for running solutions

const denoJson = await Deno.readTextFile("./deno.json");
const tasks = JSON.parse(denoJson).tasks;

tasks[`s1`] = `deno run --allow-all --unstable ./${day}/s1.ts`;
tasks[`s2`] = `deno run --allow-all --unstable ./${day}/s2.ts`;

await Deno.writeTextFile("./deno.json", JSON.stringify({ tasks }, null, 2));

console.log(
  `Setup for day ${day} complete!\nRun \`deno task s1\` or \`deno task s2\` to run the respective solutions for the day.`
);
Deno.exit(0);
