const name = "Giovanni";
const sex = "M";
const age = 27;
const tax = 23; // years

const taxCalculation = age + tax;

// Boolean return
const menRetirement = sex == 'M' && tax >= 35 && taxCalculation >= 95;   
const womenRetirement = sex == 'F' && tax >= 30 && taxCalculation >= 85; 

if (menRetirement || womenRetirement) {            // if TRUE,
   console.log(`${name}, you can retire.`);        // print positive
} else {                                           // if FALSE
   console.log(`${name}, you can't retire yet`);   // print negative
}