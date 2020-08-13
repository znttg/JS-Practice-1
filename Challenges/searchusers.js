const users = [
   {name: "Giovanni", language: ["HTML", "CSS"]},
   {name: "Alinny", language: ["JavaScript","CSS"]},
   {name: "Giovanna", language: ["HTML","Node.js"]},
];

function checkWorkWithCss(users) {
   for (let language of users.language) {
      if (language == "CSS") return true
   }
   return false
}

for (let index = 0; index < users.length; index++) {
   const userWorksWithCss = checkWorkWithCss(users[index]);

   if (userWorksWithCss) {
      console.log(`The user "${users[index].name}" works with CSS`);
   }
}