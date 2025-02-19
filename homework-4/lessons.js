let instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];
let instrumentList = document.getElementById("list");

for (let i = 0; i < instruments.length; i++) {
    instrumentList.textContent += instruments[i] + " ";
}