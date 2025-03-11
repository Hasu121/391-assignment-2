
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

const fText = document.getElementById("fortune-text");
const fBox = document.getElementById("fortune-box");

window.onload = function (){
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fText.textContent = randomFortune;
};

function Green(){
  fBox.style.backgroundColor = "lightpurple";
  fBox.style.borderColor = "black";
  fText.style.color = "darkgreen";
  fText.style.fontFamily = "Georgia, serif";
  fText.style.fontSize = "2.2em";
}

function Red(){
  fBox.style.backgroundColor = "lightcoral";
  fBox.style.borderColor = "darkred";
  fText.style.color = "darkred";
  fText.style.fontFamily = "Courier New, monospace";
  fText.style.fontSize = "1.8em";
}

function Blue(){
  fBox.style.backgroundColor = "lightblue";
  fBox.style.borderColor = "darkblue";
  fText.style.color = "darkblue";
  fText.style.fontFamily = "Times New Roman, serif";
  fText.style.fontSize = "2em";
}

function Yellow(){
  fBox.style.backgroundColor = "gold";
  fBox.style.borderColor = "darkgreen";
  fText.style.color = "black";
  fText.style.fontFamily = "Arial, sans-serif";
  fText.style.fontSize = "1.7em";
}
