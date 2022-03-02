const readline = require('readline-sync');

let name = readline.question("Enter first number ?");

console.log("First Number is  " + name );

let age = readline.question("Enter Second number");

console.log("Sum of " + name + " and " + age + " = " + sum(name,age));

function sum(a,b){
    let x = parseInt(a);
    let y = parseInt(b)
    return(x+y);
}