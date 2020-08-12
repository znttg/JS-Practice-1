
const name = "Giovanni";
const wheight = 84;
const height = 1.76;

const imc = wheight / (height * height);

let message = "";

if(imc >= 30){
   message = (`${name}, overwheight alert`);
} else {
   message = (`${name}, your wheight is inside the limits`);
}

console.log(message);