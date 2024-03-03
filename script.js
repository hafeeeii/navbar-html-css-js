let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector("ul");
let li = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

li.forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});
