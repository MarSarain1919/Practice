var today = new Date();    // Create a new Date object
var hourNow = today.getHours();     // Get the current hour
var greeting;  // Declare a variable greeting

if (hourNow > 18) {
    greeting = 'Good evening';    // If hourNow is greater than 18, greeting will be 'Good evening!'
} else if (hourNow > 12) {
    greeting = 'Good afternoon';   // If hourNow is greater than 12, greeting will be 'Good afternoon!'
}
else if (hourNow > 0) {    // If hourNow is greater than 0 
    greeting = 'Good morning';     // If hourNow is greater than 0, greeting will be 'Good morning!'
} else {
    greeting = 'Welcome';  // If hourNow is less than 0, greeting will be 'Welcome!'
}

//console.log(greeting);    // Output: Good morning!

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What is your name? ', name => {
    console.log(`${greeting}, ${name}!`);
    readline.close();
});