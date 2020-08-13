const users = [
   {name: "Giovanni", language: ["HTML", "CSS"]},
   {name: "Alinny", language: ["JavaScript","CSS"]},
   {name: "Giovanna", language: ["HTML","Node.js"]},
];

for (let user of users) {
   console.log(`${user.name} works with ${user.language.join(" and ")}`);
}