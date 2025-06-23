// const hour = new Date().getHours(); 
// let greeting;
// if(hour<18){

//   greeting = "good day";
// }
// else{
//   greeting = "good evening";
// }
// console.log(greeting);


// let age = 18;
// if( age >= 18){
//   console.log("you're an adult");
// }


// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);


// let score = 40;
// if(score >= 90){
//   console.log("A grade");
// }else if (score >= 75){
//   console.log("B grade");
// }else {
//   console.log("needs improvement");
// }


// let age = prompt("enter your age");
// age = Number(age);
// if(age < 18){
//   console.log("you are a minor.");
// }
// else if( age >= 18 && age <= 60){
//   console.log("you are an adult.");
// }
// else if (age > 60){
//   console.log("you are a sinior citizen.");
// }
// else {
//   console.log("invalid age entered");
// }


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your age: ", function(ageInput) {
//   let age = Number(ageInput);

//   if (isNaN(age)) {
//     console.log("Invalid age entered.");
//   } else if (age < 18) {
//     console.log("You are a minor.");
//   } else if (age >= 18 && age <= 60) {
//     console.log("You are an adult.");
//   } else {
//     console.log("You are a senior citizen.");
//   }

//   rl.close();
// });

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(day);

// for(let i=0; i<=5; i++){
//   console.log("dev choudhary");
// }

// let sum = 0;
// for (i=1; i<99; i++){
//   sum = sum + i;
// }
// // console.log("sum =", sum);


// let sum = 0;
// let n = 100;
// for(i=0; i<=n; i++){
//   sum = sum + i;
// }
// console.log("sum =", sum);


// let str = "dev choudhary";
// for(let i of str){
//   console.log("i =", i);
// }


// let str = "international flaag ";
// let size = 0;
// for(let i of str){
//   console.log("i = ",i);
//   size++;
// }
// console.log(size);


// let student = {
//   name: "dev" ,
//   class: 11,
//   cgpa: 9.9,
//   ispass: true
// }
// for (let key in student){
//   console.log("key =", key , "value=", student[key] );
// }


//print all the numbers from 0 to 100

for(let i=1; i<=100; i++){
  if(i%2 !== 0){
    console.log(i);
  }
}