// *Variables*
// Create a variable and console log the value

let frank = "Frank is cool."

console.log(frank)

// Create a variable, add 10 to it, and alert the value

let x = 5

alert(x + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function difference(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4)
}

difference(100,10,10,5)

// Create a function that divides one number by another and returns the remainder

function remainder(num1, num2){
    console.log(num1 % num2)
}

remainder(10, 3)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function add(num1, num2){
    if(num1 + num2 > 50) {
    alert ('Jumanji');
    }else{
        alert (num1 + num2);
    }
}

add(20, 29)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply(num1, num2, num3){
    if(num1 * num2 * num3 % 3 == 0) {
        alert('ZEBRA');
    }else{
        alert('bruh...');
    }
}

multiply(3, 3, 3)