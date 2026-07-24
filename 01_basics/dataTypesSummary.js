// Primitive 

// 7 types : String, Boolean, null, undefined, Symbol, BigInt (scientific val)
// Symbol is used to make a value unique
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);// --> false
console.log(id == anotherId); // --> false
// BigInt
const bigNumber = 45454674664n
console.log( typeof bigNumber)
let val = null
console.log(typeof val);// --> object becoz 

//Java Script is used to make type defined for every variable
//JavaScript is a dynamically typed language, meaning that type checks are performed at runtime rather than during compilation.

const score = 100
const scoreva = 100.3

const In = false
let userEmail;//--> undefined



// Reference Type--- alias--- Non-primitive
// Array, objects, Functions
// All non-primitives are object data type, except func is called as function object

const heros  = ['Shaktiman',"Veer","Mighty Raju"]

let Obj = {
    Name: "ram Kumar",
    Age: 22,
    Gender: "Male"
}

const myfunc = function(){
    console.log("Hi, I am a Scientist");
    
}
myfunc()
console.log(typeof myfunc); // ---> function  (object function)
console.log(typeof Obj);
console.log(typeof heros);

/*
Check the link below to have a good notes for the data types in js
*/
////////// https://262.ecma-international.org/5.1/#sec-11.4.3 ///

