// singleton
// object literals
const mySym = Symbol("data1")
const JsUser = {
    name : "Ram Kumar",
    age : 22,
    [mySym]: "sword", // Use square brackets for depicting symbol and also define it first
    location: "India",
    email: "ramkumar@gmail.com",
    isLoggedIn: false,
    lastlogin: ["Mon", "Sat"]
}// in the backend the key are also considered as string by default 

console.log(JsUser["email"]);// hence class as a String to retreive the data
console.log(JsUser.email)
console.log(JsUser[mySym]); // no quotes in the elem
console.log(typeof mySym);

JsUser.email = 'ram@rk.com' //overwriting data 
console.log(JsUser["email"])
// Object.freeze(JsUser) // It is locking the data from being unchanged
JsUser.email = "ramkumar49@gmail.com"
console.log(JsUser);// the val remains the same

JsUser.greeting = function(){
    console.log("Hello, my dears!");
}
console.log(JsUser.greeting)//--> undefined if freezed, else [Function (anonymous)]
console.log(JsUser.greeting())// --> it is not a function becoz we have freezed the object , now it would run well
JsUser.greetingtwo = function(){
    console.log(`Hi JsUser, ${this.name}`);
    
}
console.log(JsUser.greetingtwo());
