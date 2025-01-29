const applePrice = 0.49;

let pickedApples = 4;
pickedApples += 10;
pickedApples -= 4;

const totalForApples = applePrice * pickedApples;
console.log("Cost of Apples", totalForApples);
console.log("Too many apples", pickedApples > 5);

pickedApples -= 5;
console.log("Too many apples", pickedApples > 5);

let rememberRouteHome = false;
console.log("Good to go home", pickedApples > 5 && rememberRouteHome);

let haveAMap = true;
console.log("Good to go home", rememberRouteHome || haveAMap);
console.log("Total for apples a number", typeof totalForApples);

console.log("String of 5:", String(5), 5);
let myAddress = "999";
myAddress += " Peach" + " St";
console.log(myAddress);

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));
console.log("My address", myAddress.replace("St", "Street"));

console.log("Anthony".length);

let myAge = "1";
myAge = Number(myAge);
myAge += 5/12;
console.log("My age is", myAge.toFixed(2));
console.log("My next birthday:", Math.ceil(myAge));

console.log("My favorite number: ", Math.round(Math.random() * 1000));