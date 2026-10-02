
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-links a");
const panels = document.querySelectorAll(".panel");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalEmail = document.getElementById("modal-email");
const modalMsg = document.getElementById("modal-msg");
const modalSend = document.getElementById("modal-send");
const modalClose = document.getElementById("modal-close");


window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});


