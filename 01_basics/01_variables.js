// investigation wali pdai
const accountId = 14453; //variable name should readable
let accountEmail = "hitesh@gmail.com"; //memoryname: accountEmail value:hitesh@gmail.com
var accountPassword = "12345";
accountCity = "Jaipur" //possibility :variable can be declare like this

//theory
//compiler have pre defined meaning to these keyword: let, const , var, etc.
//let, const , var: assign it to memory.
//mostly things should not change: const
//to declare const: const
//to declare variable we have two ways: let and var
//{} this curlybraces is scope
//on inital days javascript does not work on the basis of scope
//var have scope problem
//shortcut: log press enter

// accountId = 2; not allowed

accountEmail = "hc@hc.com";
accountPassword = "23242453";
accountCity =  'bengaluru';
let accountState; //declare but not initialize: javascript consider it undefined

console.log(accountId);
console.log(accountEmail);

//using table method of console
//table() This method allows us to log data to the console in the form of tables. 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Prefer not use var
because of issue in block scope and functional scope
*/