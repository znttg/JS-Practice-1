
const name = "Giovanni";
const wheight = 84;
const height = 1.76;

const imc = wheight / (height * height);

if(imc >= 30){
   console.log(`${name}, overwheight alert`);
} else {
   console.log(`${name}, your wheight is inside the limits`);
}