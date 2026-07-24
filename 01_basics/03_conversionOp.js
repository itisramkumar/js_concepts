let score = 4567
let name = "Ram"
let letno = "45850gasj"
let val = undefined
let value = null
let happy = true
let sad = false

console.log(typeof score);
console.log(typeof (score));
console.log(typeof sad);


let valInNum = Number(score)
let ab = Number(name)
let lcd = Number(letno)
let ef = Number(val)
let gf = Number(value)
let gh = String(happy)
let ij = Number(happy)
let ji = Number(sad);


console.log(typeof valInNum);
console.log(valInNum);
console.log(ab);
console.log(lcd);
console.log(ef);
console.log(gf);
console.log(gh);
console.log(ij);
console.log(ji);

// The interview question was
console.log(null == undefined);
console.log(null === undefined)
console.log(undefined);
console.log(null);

/* String ---> Number
 "33" ---> 33
 "2344asd"-----> NaN
 "Ramk" --> NaN
 uncommon vals ---> Number
 undefined ---> NaN
 nul --> 0
 Boolean ---> Number 
 true ---> 1
 false --> 0
 */

let loggedIn = 1
let loggedOut = 0

let In = Boolean(loggedIn);
let Out = Boolean(loggedOut);

console.log("loggedIn :",In);
console.log("loggedOut :",Out);

let names = " "
let er = Boolean(names);
let namess = "ram"
let ers = Boolean(namess);
console.log(er)
console.log(ers)
/* Number ---> Boolean
1 ---> True
0 ---> False

String ----> Boolean
"Ram" ---> true
"" ---> false
" " ---> true
*/

let numbers = 45654
let nom = String(numbers)
console.log( typeof nom);

console.log(nom);

/* String ---> Number
4522562 ---> 4522562

*/

// ******************** Operations *****************
 let values = 2004
 let negval = -values
 console.log(negval);

// Common arithmetic Ops
//  console.log(2+2);
//  console.log(2*2);
//  console.log(2**3);
//  console.log(2/2);
//  console.log(7%3);
//  console.log(546-458);

let str1 = "Ram"
let str2 = " Kumar"
console.log(str1+str2);
/* or --let str3 = str1 + str2
--------console.log(str3);
*/

console.log("1"+2); //---> 12
console.log(1+"2"); //----> 12
console.log("1"+"2");//---->12
console.log("1"+2+2); //--->122
console.log(1+2+"2"); // --->32
console.log(1+2+"3"+2); //---->332
console.log(3*"3"*3); // ----> 27
console.log(3**"3"); //----->27

console.log("3"-"3"); // -----> 0
console.log("56"/"56"); //----> 1
console.log("6"%"3"); // ---> 0
console.log(3 * 4 + 5 % 3) //---> 14 not like this
console.log((3 * 4) + (5 % 3)) //---> 14 use parenthesis 


// for /, %, *, **, - it considers all as str
// for + , it considers at concatenation after it , but adds nos befor "+" symbol

console.log(+true); // --> 1 it is incremented but still its 1
console.log(+""); //--> 0 --> '("")' is 0 in num and false in bool
//console.log(""+);// not possible

let gameCounter = 45
gameCounter++;
console.log(gameCounter); // it is incremented +1

let gameCounter = 45
++gameCounter;
console.log(gameCounter); //---> even in prefix it increments +1

// for clarification, google --> prefix & postfix js mdn 


///////////////////////// MAKE CODE READABLE///////////////////////






 
 
 
 