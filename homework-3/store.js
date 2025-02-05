let itemPrice = 40.99; // Price may change later
const totalAfterTax = itemPrice * (1 + 0.07); // Formula is constant
const discountedTotal = itemPrice * (1 + 0.07) * (1 - 0.10); // Formula is constant

console.log("Total after tax:", totalAfterTax);
console.log("Qualifies for discount:", Boolean(totalAfterTax > 50));
console.log("Discounted total after tax:", discountedTotal);