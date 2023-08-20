const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    // Add more quotes here
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", generateRandomQuote);

function animateText(text) {
    let newText = '';
    for (const char of text) {
        newText += char === ' ' ? ' ' : `<span class="animated-letter">${char}</span>`;
    }
    return newText;
}

function generateRandomQuote() {
    quoteElement.classList.add("fade-out");
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteElement.innerHTML = animateText(randomQuote);
        quoteElement.classList.remove("fade-out");
    }, 500);
}

