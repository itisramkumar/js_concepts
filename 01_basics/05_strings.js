const name = "Ram kumar"
const repoCount = 10

console.log(name, repoCount);

console.log(`My name is ${name.toUpperCase()} and my git repocount is ${repoCount}.`)
// The above is a sample of what you may use as modern code for backend.

const gameName = new String('Ram Kumarr')
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4); // we can't use negativ val in substring
console.log(newString);

const anotherStr = gameName.slice(-9,4)
console.log(anotherStr);

const newStr = "    Ram Kumar   "
console.log(newStr.trimEnd());

const url = "https://ramumar.com/ram%20kumar"  // the website considers the data inn urln coding

console.log(url.replace("%20","-"))
console.log(url);
console.log(url.includes("ram"));
console.log(url.includes("ramkumar"));

