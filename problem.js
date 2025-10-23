/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


//create data primitives I used string, number, and object
let password = 123;
let user = "hello";
let checksystem = {
    match: "Access Granted!",
    fail: "Access Denied",
    forgot: "Here is a hint",
    reset: "Let's reset your account",
} 
//next step compare the two parameters
function printMatch(password, user) {
    console.log(
        " If password and user's input match exactly like this " + 
        password + user +
        " it will show " + checksystem.match
    )
}
printMatch(password, user);
//check the message if it works by node problem.js in terminal

function printNotMatch(password,user) {
    console.log(
        password + user + 
        " If these two things don't match " + 
        "," + " it will show " +
        checksystem.fail
    )

    console.log(
        checksystem.forgot + " message will show up if someone forgot the password. "
    )

    console.log(
        " You need to " +
        checksystem.reset + 
        " if everything is not working. "
    )
}
printNotMatch(password,user);


let shortPW = "Your password is too short!";
let PWset = "This password you set should not be used because it glitches the system!";

function printAlerts(shortPW, PWset) {
    console.log(
        " There are two alerts. " + 
        shortPW + 
        " If your password less than 5 characters. " + 
        " and " + 
        " If the password set is  'forgot' or 'reset' it shows " +
        PWset 
    )
}
printAlerts(shortPW, PWset);


