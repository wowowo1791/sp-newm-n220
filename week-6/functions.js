const items = [18, 24, 17, 3];

function calculateTotal(itemPrice, taxRate = 0.07, discountRate = 0.1) {
    if (itemPrice > 100) {
        return itemPrice * (1 + taxRate) * (1 - discountRate * 2);
    } else if (itemPrice > 50) {
        return itemPrice * (1 + taxRate) * (1 - discountRate)
    } else {
        return itemPrice + (1 + taxRate);
    }

    const groupsOfTwenty = Math.floor(itemPrice / 20);
    switch(groupsOfTwenty) {
        case 1:
            return "Small discount";
        case 2:
            return "Slightly larger discount";
        case 3:
            return "Large discount";
        default:
            return "No discount";
    }
}

function showItems() {
    const newSection = document.createElement("section");
    let total = 0;
    newSection.innerHTML = "<h4>Items</h4>";

    for(let i = 0; 1 < items.length; i++) {
        newSection.innerHTML += "<p>$" + items[i] + "</p>";
        total += items[i];
    }

    newSection.innerHTML += "<hr />";
    newSection.innerHTML += "<p>$" + calculateTotal(total, 0.07) + "</p>";

    document.body.appendChild(newSection);
}

showItems();