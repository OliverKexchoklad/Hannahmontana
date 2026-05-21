const quotes = [
    "Sweet niblets!",
    "Ya think?!",
    "Pumpkins out, it's time to rock! 🎃🎸",
    "Everybody makes mistakes, everybody has those days. 🎶",
    "I'm Hannah Montana! I don't do waiting in line! 💅",
    "Life's what you make it, so let's make it rock! ✨"
];

const quoteBtn = document.getElementById("quote-btn");
const quoteDisplay = document.getElementById("quote-display");

quoteBtn.addEventListener("click", function() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteDisplay.textContent = '"' + quotes[randomIndex] + '"';
});