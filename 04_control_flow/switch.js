// Switch Statement: need to check multiple condition
//Syntax: Basic System 
// switch (key) { //key ki multiple value check krte hai
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) { //key -> wo value jo muje hr bar check krni hai
    case 1: //value: value is checked against key: if equal than code is executed for that value.
        console.log("January")
        break; //if break is not written than code below will also executed.k
    case 2:  // to copy: shitf + alt+ down arrow : duplicate shortcut
        console.log("Feb")
        break; 
    case 3: 
        console.log("March")
        break; 
    case 4: 
        console.log("April")
        break; 

    default: // if no condtion is match then this will execute.
        console.log("default case match")
        break;
}
// note: switch statement is case sensitive and type sensitive








