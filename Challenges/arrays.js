const developer = {
   name: "Giovanni",
   age: 27,
   tecnologies: [
      {name: "C++", specialty: "Desktop"},
      {name: "Python", specialty: "Data Science"},
      {name: "JavaScript", specialty: "Web/Mobile"},
   ]
}

console.log(`The user ${developer.name} is ${developer.age} years old and works on ${developer.tecnologies[0].name} with a ${developer.tecnologies[0].specialty} specialty.`); 