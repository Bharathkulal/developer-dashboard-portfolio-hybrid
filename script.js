const texts = [
    "Full Stack Developer 🚀",
    "Frontend Designer 🎨",
    "Backend Developer ⚙️",
    "Building CivicSolve 🔥"
];

let line = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect(){
    let display = document.getElementById("typing");

    if(line >= texts.length) line = 0;

    if(!isDeleting){
        currentText = texts[line].substring(0, charIndex++);
    } else {
        currentText = texts[line].substring(0, charIndex--);
    }

    display.innerHTML = currentText;

    let speed = isDeleting ? 50 : 100;

    if(!isDeleting && charIndex === texts[line].length){
        isDeleting = true;
        speed = 1500; // pause
    } 
    else if(isDeleting && charIndex === 0){
        isDeleting = false;
        line++;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

/* THEME */
function toggleTheme(){
    document.body.classList.toggle("light");
}

/* LOGOUT */
function logout(){
    window.location.href = "index.html";
}