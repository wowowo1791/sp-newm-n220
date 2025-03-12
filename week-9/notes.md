let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

console.log(car.brand); // Output: Toyota
console.log(car["year"]); // Output: 2022

let person = {
  name: "Ty",
  age: 307,
  isStudent: false,
};
console.log(person.name); // Output: Ty

You can modify properties dynamically by assigning new values:

person.age = 310;
console.log(person.age); // Output: 310

let basicPeep = {
  name: "Bobby",
  greet() {
    return "Hello, my name is " + this.name;
  },
};
console.log(person.greet()); // Output: Hello, my name is Bob

Methods make objects interactive and useful by allowing them to perform behaviors related to their data.

You can also define function outside of the object then set a method of the object equal to said function.

function socialize() {
  return "You must be one of those wizards. From the College in Winterhold.";
}

let stage1Peep = {
  name: "Bob",
  socialize: socialize
};
console.log(person.greet()); // Output: Hello, my name is Bob

let person = {
    name: "Alice",
    age: 25,
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is Alice

Here, this.name refers to the name property of the person object.

 
Method 	Description 	Mutates Array
push 	Add item to end 	true
pop 	Remove item from end 	true
shift 	Remove item from start 	true
unshift 	Add item to start 	true
splice 	Remove & add items at index 	true
		
concat 	Duplicate array with more items 	false
slice 	Duplicate array with select items 	false
join 	Convert array to string 	false

onclick
onchange - Fires when the value of an input field changes
oninput - Fires when a user types in an input field, even before they move away from it.
onsubmit - Fires when a form is submitted
onmouseover
onkeydown
ondragstart
onload
onfocus

.length 	Returns the length of a string.
.toUpperCase() 	Converts the string to uppercase.
.toLowerCase() 	Converts the string to lowercase.
.trim() 	Removes whitespace from both ends of a string.
.includes(substring) 	Checks if a string contains another string (case-sensitive).
.indexOf(substring) 	Returns the index of the first occurrence of a substring, or -1 if not found.
.slice(start, end) 	Extracts a section of a string and returns it as a new string.
.replace(old, new) 	Replaces a specified value with another value.
.replaceAll(old, new) 	Replaces all instances of a specified value with another value.
.split(separator) 	Splits a string into an array based on a separator.
.charAt(index) 	Returns the character at the specified index.

Common Methods:
Method 	Description 	Example
.toFixed(digits) 	Rounds a number to a specified number of decimal places.
.toString() 	Converts a number to a string.
.toExponential(digits) 	Converts a number to exponential notation.
.toPrecision(digits) 	Formats a number to a specified total length.
Number.isInteger(value) 	Checks if a value is an integer.
Number.parseFloat(string) 	Converts a string to a floating-point number.
Number.parseInt(string, radix) 	Converts a string to an integer with a specified base (radix).
Math.round(num) 	Rounds a number to the nearest integer.
Math.floor(num) 	Rounds a number down to the nearest integer.
Math.ceil(num) 	Rounds a number up to the nearest integer.
Math.random() 	Return a random number between 0 and 1, not including 1.
Math.PI 	Returns digits of pi for calculation purposes



document.getElementById(id)
document.getElementsByClassName(className)
document.querySelector(selector)
document.querySelectorAll(selector)

textContent – Sets or retrieves only the text inside an element, ignoring HTML tags.
innerText – Similar to textContent, but respects CSS styling (e.g., hidden text is not retrieved).
innerHTML – Sets or retrieves the HTML content inside an element.

style.backgroundColor – Changes the background color.

style.color – Changes the text color.

style.fontSize – Adjusts the font size.

style.display – Controls the visibility of an element.

document.getElementById("box").style.display = "none"; // Hide element
document.getElementById("box").style.display = "block"; // Show element

 
Changing Attributes of an Element

JavaScript can also modify element attributes directly:

    Modifying standard attributes

    let link = document.getElementById("myLink");
    link.href = "https://example.com"; // Changes the href attribute of a link
    link.target = "_blank"; // Opens link in a new tab

    Using data- attributes
        Custom data- attributes store extra information about an element.
        Example:

        let button = document.querySelector(".buy-btn");
        let productId = button.dataset.productId;
        console.log(productId); // Logs the product ID

    Using setAttribute & getAttribute

    document.getElementById("submit-btn").setAttribute("disabled", true); // Disables a button 

 
Using ClassList Methods

The classList property allows adding, removing, and toggling CSS classes dynamically:

    Adding a class

    document.getElementById("box").classList.add("highlight");

    Removing a class

    document.getElementById("box").classList.remove("highlight");

    Toggling a class (adds it if missing, removes it if present)

    document.getElementById("menu").classList.toggle("visible");

    Checking if an element has a class

    let hasClass = document
      .getElementById("title")
      .classList.contains("large-text");
    console.log(hasClass); // true or false

let newDiv = document.createElement("div");
document.body.appendChild(newDiv);