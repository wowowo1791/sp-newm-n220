const doc_Menu = document.getElementById("menu");
const doc_Cart = document.getElementById("cart");
const doc_NoItems = document.getElementById("no-items");

const menuItems = ["Hamburger - $2.99", "Cheeseburger - $3.99", "Cheese Pizza - $3.99", "Pepperoni Pizza - $4.99", "Sausage Pizza - $4.99", "Caesar Salad - $3.99", "Fries - $1.99", "Onion Rings - $2.49"];
const menuItemNames = ["Hamburger", "Cheeseburger", "Cheese Pizza", "Pepperoni Pizza", "Sausage Pizza", "Caesar Salad", "Fries", "Onion Rings"];
const itemPrices = [2.99, 3.99, 3.99, 4.99, 4.99, 3.99, 1.99, 2.49];

const cartItems = [];
const cartPrices = [];
const itemSpecialInstructions = ["", "", "", "", "", "", "", ""]

function noItemsCheck() {
    if(cartItems.length == 0) {
        doc_NoItems.style.display = "block";
        return true;
    } else {
        doc_NoItems.style.display = "none";
    }
}
/*function updateSpecialRequest(index) {
    itemSpecialInstructions[index] = ;
}*/
function refreshCart() {
    doc_Cart.innerHTML = "<tr><th>Item Name</th><th>Price</th><th>Special Request</th><th>Actions</th></tr>";
    let totalPrice = 0;

    for(let i = 0; i < cartItems.length; i++) {
        const newTable = document.createElement("tr");
        const newCell1 = document.createElement("td");
        newCell1.innerText = cartItems[i];

        const newCell2 = document.createElement("td");
        newCell2.innerText = cartPrices[i];

        const newCell3 = document.createElement("textarea");
        //newCell3.onchange = updateSpecialRequest([i]);

        const newCell4 = document.createElement("button");
        newCell4.innerText = "-";
        newCell4.onclick = removeItemFromCart;

    
        newTable.appendChild(newCell1)
        newTable.appendChild(newCell2)
        newTable.appendChild(newCell3)
        newTable.appendChild(newCell4)
        doc_Cart.appendChild(newTable);
    
        totalPrice += Number(cartPrices[i]);
    }

    /*if(noItemsCheck() = true) {
        doc_Cart.innerHTML += "<tr><td colspan='4'>No items in cart</td></tr>"
    }*/
    /*doc_Cart.innerHTML += "<tr><td>Total</td><td colspan='3'>$" + totalPrice + "</td></tr>";*/ // It works, but it breaks the page.
}

function addItemToCart(item) {
    cartItems.push(item.target.dataset.name);
    cartPrices.push(item.target.dataset.price);
    refreshCart();
    noItemsCheck();    
}
function removeItemFromCart() {
    cartItems.pop();
    cartPrices.pop();
    refreshCart();
    noItemsCheck();
}

for(let i = 0; i < menuItems.length; i++) {
    const newList = document.createElement("li");
    newList.innerText = menuItems[i];

    const newButton = document.createElement("button");
    newButton.innerText = "+";
    newButton.dataset.name = menuItemNames[i];
    newButton.dataset.price = itemPrices[i];
    newButton.onclick = addItemToCart;

    newList.appendChild(newButton);
    doc_Menu.appendChild(newList);
}