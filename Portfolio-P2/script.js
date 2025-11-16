let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

navbar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

const words = ["Desarrollador web", "Desarrollador de software", "Editor de videos", "Bartender"];
const typed = document.querySelector(".typed");

let wordIndex = 0;

function type(word, cb) {
  typed.style.width = "0";
  typed.style.animation = `typing ${word.length * 0.1}s steps(${word.length}, end) forwards`;
  let i = 0;
  const interval = setInterval(() => {
    typed.textContent = word.slice(0, i + 1);
    i++;
    if (i === word.length) {
      clearInterval(interval);
      setTimeout(cb, 1200); 
    }
  }, 100);
}

function erase(word, cb) {
  typed.style.animation = `erase ${word.length * 0.06}s steps(${word.length}, end) forwards`;
  let i = word.length;
  const interval = setInterval(() => {
    typed.textContent = word.slice(0, i - 1);
    i--;
    if (i === 0) {
      clearInterval(interval);
      setTimeout(cb, 400); 
    }
  }, 60);
}

function loop() {
  const word = words[wordIndex];
  type(word, () => {
    erase(word, () => {
      wordIndex = (wordIndex + 1) % words.length;
      loop();
    });
  });
}

loop();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  
  const msg = document.getElementById("formMessage");
  msg.classList.add("show");

  
  this.reset();

  
  setTimeout(() => {
    msg.classList.remove("show");
  }, 4000);
});




