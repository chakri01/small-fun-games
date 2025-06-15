const display = document.getElementById('display');
const secretMessageDiv = document.getElementById('secretMessage');
const messageText = document.getElementById('messageText');
const messageLink = document.getElementById('messageLink');

const secretCodes = {
    "1729": { type: "quote", content: "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein (attributed)" }, // Ramanujan number
    "31417": { type: "quote", content: "Innovation distinguishes between a leader and a follower. - Steve Jobs" }, // Pi approximation
    "299792458": { type: "quote", content: "Your time is limited, so don't waste it living someone else's life. - Steve Jobs" }, // Speed of light (m/s)
    "161803": { type: "quote", content: "The best way to predict the future is to create it. - Peter Drucker" }, // Golden ratio approximation
    "271828": { type: "quote", content: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill (often attributed to CEOs)" }, // e approximation
    "149": {type: "game", content: "https://www.google.com/fbx?fbx=snake_arcade"}, // Number of days in a leap year first two digits
    "88": { type: "game", content: "https://www.google.com/logos/fnbx/tictactoe/tictactoe.html" }, // Piano keys
    "404": { type: "game", content: "https://error404.fun/" },  // Error 404 Game
    "1337": { type: "game", content: "https://www.addictinggames.com/puzzle/the-impossible-quiz" }, // Leet speak
    "2048": { type: "game", content: "https://play2048.co/" }, // Game 2048
    "7": { type: "quote", content: "The most dangerous phrase in our language is: 'We've always done it this way.' - Grace Hopper" }, // Lucky number
    "42": { type: "quote", content: "Don't panic. - Douglas Adams" }, // Answer to the ultimate question
    "66": { type: "game", content: "https://poki.com/en/g/moto-x3m" }, // Route 66
    "101": { type: "game", content: "https://www.mathplayground.com/candy_shop_ratios.html" }, // Binary code
    "112358": { type: "quote", content: "Strive not to be a success, but rather to be of value. - Albert Einstein" }, // Fibonacci sequence
    "999": { type: "game", content: "https://papertoilet.com/" }, // Just for Fun
    "23": { type: "quote", content: "Simplicity is the ultimate sophistication. - Leonardo da Vinci (often attributed to CEOs)" }, // 23 enigma
    "1984": { type: "quote", content: "The only constant in life is change. - Heraclitus (often attributed to CEOs)" }, // George Orwell's 1984
    "17": { type: "game", content: "https://www.crazygames.com/game/1v1-lol" }, // Random number
    "123": { type: "quote", content: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt (often attributed to CEOs)" } // Easy sequence
};

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    hideSecretMessage();
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const code = display.value;
    if (secretCodes[code]) {
        revealSecret(secretCodes[code]);
    } else {
        try {
            display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-'));
        } catch {
            display.value = 'Error';
        }
    }
}

function revealSecret(secret) {
    if (secret.type === "quote") {
        messageText.innerText = secret.content;
        messageLink.style.display = "none"; // Hide the link for quotes
    } else if (secret.type === "game") {
        messageText.innerText = "Play this game!";
        messageLink.href = secret.content;
        messageLink.style.display = "inline"; // Show the link for games
    }

    secretMessageDiv.style.display = "block";
}

function hideSecretMessage() {
    secretMessageDiv.style.display = "none";
}