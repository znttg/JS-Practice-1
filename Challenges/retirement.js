const name = "Giovanni";
const sex = "M";
const age = 27;
const tax = 23; // years

if(sex == "M") {
   if((age + tax) >= 95){
      console.log(`${name}, you can claim your retirement`);
   } else {
      console.log(`${name}, you cant retire yet`);
   }
} else if (sex == "F"){
   if((age + tax) >= 85){
      console.log(`${name}, you can claim your retirement`);
   } else {
      console.log(`${name}, you cant retire yet`);
   }
}