let scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];
let scoreList = document.getElementById("list");
let averageScore = 0;

for (let i = 0; i < scores.length; i++) {
    scoreList.textContent += scores[i] + " ";
    averageScore += scores[i]
}

// Display average score
document.getElementById("average").textContent = averageScore / scores.length