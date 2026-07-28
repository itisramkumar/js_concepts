// // array

const myArray = new Array(0,1,2,3,4,5)
// console.log(myArray)

// myArray.push(6)
// myArray.push(33)
// myArray.pop()
// // myArray.unshift(33)
// myArray.shift() // it removes the first element in the list
// console.log(myArray.includes(5))// Boolean val for checking if the element is present in the array or not
// console.log(myArray.indexOf(9))// if the requested elem in not avl then it prints "-1"
// console.log(myArray)
// console.log(typeof(myArray))
// const newArr = myArray.join()
// console.log(newArr)
// console.log(typeof(newArr));

// slice, splice

console.log("A ", myArray) // Array a consists of the org values
const myn1 = myArray.slice(1,3)
console.log("B ", myArray)// Once we apply the slice operation The datas are executed in one partition from the original array
console.log(myn1)


const myn2 = myArray.splice(1,3)// Splice uses the same data to ext But The range which we are asking from is deleted from the original array and it is executed in the new array So once we start performing the code for the C then, the arrays which has been executed in the prior execution is omitted in the new output
console.log("C ", myArray)
console.log(myn2);

const marvel_heros= ["thor", "Hulk", "IronMan"]
const dc = ["Superman", "BatMan","flash"]
// marvel_heros.concat(dc) --> [ 'thor', 'Hulk', 'IronMan', ['Superman', 'BatMan', 'flash'] ]
//marvel_heors.push(dc) --> [ 'thor', 'Hulk', 'IronMan', ['Superman', 'BatMan', 'flash'] ]
const super_heros = marvel_heros.concat(dc)
//--> [ 'thor', 'Hulk', 'IronMan', 'Superman', 'BatMan', 'flash' ]
console.log(super_heros)
const all_heros = [...marvel_heros,...dc]
console.log(all_heros) // multiple arguments can be given here , most recommended

const arrays = Array(1,2,3,[4,5,6,7],4,5,6,[1,2,[4,5]])// if you miss a comma , it would print as undefined for the next execution
console.log(arrays.flat(Infinity))

console.log(Array.isArray("Ram")) // return a boolena value
console.log(Array.from("Avacado")) //  ->['A', 'v', 'a','c', 'a', 'd','o']
console.log(Array.from({name:"Ram"})) //-->[]
let sc1 = 100
let sc2 = 200
let sc3 = 300
console.log(Array.of(sc1,sc2,sc3));// --> [ 100, 200, 300 ]