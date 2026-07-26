const score = 400
console.log(score); // -->400,inbult it understands it is a number and prints

const balance  = new Number(100)
console.log(typeof balance)
console.log(balance);//---> [Number: 100], it states the type explicitly
console.log(balance.toString().length)
console.log(balance.toFixed(2));// This will useful in creating financial application

const otherNum = 1235.25658
console.log(otherNum.toPrecision(4));
/* for 3 deci places
in tens
56.77----> 56.77
in hundreds
156.7 --> 157
in thousands
1235.25658 ---> 1.24e+3 rounds the nearlargest
in ten thousands
52487.5868 ---> 5.25e+4  rounds the nearlargest
*/

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));
// it applies commas for user-readability , default- US Stnd, 
// use "en-IN" for Indian Standards

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++//

console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.abs(4.5));
// In Math.random the val will be generated between 0 and 1
console.log(Math.round(Math.random()*10)); // Usefull for dice games
console.log((Math.random()*10)+1) //--> x.xyzzz
//Math.random()*10 is for getting vaues more than 0
console.log(Math.floor(Math.random()*10)+1)
// .floor for retrievinbg a whole number
max = 20
min = 10
console.log(Math.floor(Math.random() * (max-min+1))+min);
// This is for getting no between 10 and 20