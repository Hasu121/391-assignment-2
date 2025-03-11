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

window.onload = function(){
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fText.textContent = randomFortune;
};

function changeFontColor(){
    const colors = ["#fff000", "#00fff0", "#f000ff", "#ff00ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fText.style.color = randomColor;
}

function changeBackgroundColor(){
    const colors = ["#ffcccb", "#cbf1cb", "#cbe1f1", "#f1cbe1"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fBox.style.backgroundColor = randomColor;
}

function changeBorderColor(){
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    fBox.style.borderColor = randomColor;
}

function changeFontSize(){
    const sizes = ["1.5em", "2em", "2.5em"];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    fText.style.fontSize = randomSize;
    
}

function changeFontType(){
    const fType = ["Arial", "Georgia", "Courier New", "Times New Roman"];
    const randomType = fType[Math.floor(Math.random() * fType.length)];
    fText.style.fontFamily = randomType;
}