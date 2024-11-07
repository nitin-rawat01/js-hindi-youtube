//defination: Javascript Date object represent a single moment in time in a platform-independent format.
// #date:return milliseconds started from 1 jan 1970.
//TC39: ORGANISTATION define new feature of js.TC39 is working on Temporal, a new Date/Time API.
//temporal(api): modern date/time api(proposal to include in js as a global object).

//Existing method of using date
let myDate = new Date(); //create object(myDate) of Date()
// console.log(typeof myDate); //object asked in interview
//Note: myDate object is hard to read/understand and use.case: make date object more usable.

// Basics
//Converting into string
console.log(myDate.toString());

//other methods: toDateString, toISOString,toJSON, toLocaleDateString, toLocaleString
//diff methods convert Date into diff format.which method to use depends on usage.
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

//Declaring Specific Date
// let myCreatedDate = new Date(2024, 10, 0o7);
// let myCreatedDate = new Date(2024, 10, 0o7, 5, 3);  //Thu Nov 07 2024 month start from: 0:jan



//Creating more specific date format.
//let myCreatedDate = new Date("2024-11-07"); //YY-MM-DD output: Thu Nov 07 2024 here month is calculated from 1(1->jan).
//Note: for single digit month start from 0 and for double digit month start from 1

//format specific for India: mm-dd-yy
let myCreatedDate = new Date("11-07-2024"); //output:Fri Nov 07 2024

console.log(myCreatedDate.toDateString()); 


//Time Stamp in Date Object
//use in quizes, polls(faster winner) to know exact time stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp); //milliseconds from 1 jan 1970 

//converting mycreatedDate into milliseconds
console.log(myCreatedDate.getTime()); //time in milliseconds , we can easily compare these time in milliseconds//this is how done in big projects

//converting into seconds://asked in interview
//Note: but always do comparision in milliseconds
console.log(Math.floor(Date.now()/1000));  //use floor or round but not ceiling


//Some More Methods
let newDate = new Date();
//getting month
console.log(newDate.getMonth()); //10: nov add 1 to avoid confusion the end user
console.log(newDate.getDay()); // 4: thursday

//by using these above methods we create complex date using string interpolation.
// `${newDate.getDay()} and the time is`

//interesting and useful method
//customizing the date return from local string
let customizeDate = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(customizeDate); //Thursday //typeof: string




