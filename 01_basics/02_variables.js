const accountId = 41338
let accountEmail = "rajiniram02@gmail.com"
var accountPassword = "804512"
accountCity = "Tamil Nadu"
let accountState

//accountId = 2 not allowed
accountEmail = "ramkumar@rkgroups.com"
accountPassword = "1102552"
accountCity = "Haryana"
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, accountCity,accountState])
