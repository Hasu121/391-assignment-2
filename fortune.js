// Array of fortune messages
const fortunes = [
  "True wisdom comes not from knowledge, but from understanding.",
  "The best way to predict the future is to create it.",
  "Be yourself, because everyone else is taken.",
  "Success is a journey, not a destination.",
  "Every moment is a fresh beginning.",
  "You are capable of more than you know.",
  "The only limit is the one you set yourself.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Your time is limited, don't waste it living someone else's life."
];

// Get references to the fortune text and fortune box elements
const fText = document.getElementById("fortune-text");
const fBox = document.getElementById("fortune-box");

// Function to display a random fortune when the page loads
window.onload = function () {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fText.textContent = randomFortune;
};

// Function to apply green-themed styles to the fortune box
function applyGreenStyle() {
  fBox.style.backgroundColor = "lightgreen";
  fBox.style.borderColor = "darkgreen";
  fText.style.color = "darkgreen";
  fText.style.fontFamily = "Georgia, serif";
  fText.style.fontSize = "1.5em";
}

// Function to apply red-themed styles to the fortune box
function applyRedStyle() {
  fBox.style.backgroundColor = "lightcoral";
  fBox.style.borderColor = "darkred";
  fText.style.color = "darkred";
  fText.style.fontFamily = "Courier New, monospace";
  fText.style.fontSize = "1.8em";
}

// Function to apply blue-themed styles to the fortune box
function applyBlueStyle() {
  fBox.style.backgroundColor = "lightblue";
  fBox.style.borderColor = "darkblue";
  fText.style.color = "darkblue";
  fText.style.fontFamily = "Times New Roman, serif";
  fText.style.fontSize = "1.6em";
}

// Function to apply yellow-themed styles to the fortune box
function applyYellowStyle() {
  fBox.style.backgroundColor = "lightyellow";
  fBox.style.borderColor = "goldenrod";
  fText.style.color = "black";
  fText.style.fontFamily = "Arial, sans-serif";
  fText.style.fontSize = "1.7em";
}
