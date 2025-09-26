
    /*let a = parseInt(prompt("Enter number a : ")); 
    let b = parseInt(prompt("Enter number b : "));
    
    let sum = a+b;

alert("sum od two number is" +sum);*/
const f = require('http');


// Ask the user for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Add the numbers
let sum = num1 + num2;
let mul = num1 * num2;
f.createServer((req,res) =>{
    console.log("Method is :",req.method);
    if (req.method === 'GET'){
        res.write("Sum is",sum);
    }
    if (req.method === 'POST'){
        res.write("multiplication is",mul);
    }
}).listen(4000,() => console.log("Server started"));



// Display the result

