const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar-menu");

// Click en el botón hamburguesa
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Submenús en mobile
const links = document.querySelectorAll(".navbar-menu > li > a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    }
  });
});
