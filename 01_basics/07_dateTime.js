let myDate = new Date()// --> new date is the instance , myDate is the object
console.log(myDate);//-->2026-07-26T13:05:57.010Z
console.log(myDate.toString());//-->Sun Jul 26 2026 13:07:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//--> Sun Jul 26 2026
console.log(myDate.toLocaleString());//-->7/26/2026, 1:08:41 PM
console.log(myDate.toLocaleDateString());//-->7/26/2026
console.log(myDate.toTimeString()); //-->13:12:29 GMT+0000 (Coordinated Universal Time)
console.log(typeof myDate); //--> object

let myDate1 = new Date(2023,0,23)
let myDate2 = new Date(2026,7,26,18,50)//8/26/2026, 6:50:00 PM // the 18, 50 helps in railway time but prionts in 12hr f with pm detail
console.log(myDate2.toLocaleString());
console.log(myDate1.toDateString());

//let Date3 = new Date("2026-07-26")
let Date3 = new Date("01-14-2026")
console.log(Date3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date3.getTime());
//for converting date to time
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay()+1);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

// ${newDate.getDay()} and the time

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))