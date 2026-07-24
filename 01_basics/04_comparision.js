// console.log(2>=11);
// console.log(2==11);
// console.log(2!=11);
// console.log(2<=11);
// console.log(2>11);
// console.log(2<11);

console.log("02">1); // ---> True
console.log("2">1);

console.log(null>0); // ---> false
console.log(null<0); // ----> false
console.log(null==0); // ---> false (equality check is right)
console.log(null>=0); // ---> true  (convert null to a number)
console.log(null<=0); // -----> true (convert null to a number)
/*
The reason is that an equality check == and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(undefined> 0);//---> false
console.log(undefined< 0);//---> false
console.log(undefined>= 0);// ---> false
console.log(undefined<= 0);// ---> false
console.log(undefined!= 0);// ----> true 

// The interview question was
console.log(null == undefined); // ---> true, check value (loose equality)
console.log(null === undefined) // ---> false, checks type (strict equality)
console.log(undefined); // ---> undefined
console.log(null); // ----> null







