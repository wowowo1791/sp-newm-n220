let passwordInPlainText = "(d0nteatTheScript)"; // For all of them, user may change password later
let passwordStartsWithSpace = Boolean(passwordInPlainText.charAt(0) == " "); // Same as first reason
let passwordEightOrLonger = Boolean(passwordInPlainText.length >= 8); // ^
let passwordHasWordEat = Boolean(passwordInPlainText.includes("eat")); // ^

console.log(passwordStartsWithSpace);
console.log(passwordEightOrLonger);
console.log(passwordHasWordEat);