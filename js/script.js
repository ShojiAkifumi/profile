const headerMenu = document.getElementById("headerMenu");
const humberger = document.getElementById("humberger");

humberger.addEventListener("click", () => {
  if (!headerMenu.classList.contains("loaded")) headerMenu.classList.add("loaded");
  headerMenu.classList.toggle("menu-open");
});

const menuCloseTarget = document.getElementById("menu-close-target");

menuCloseTarget.addEventListener("click", () => {
  headerMenu.classList.remove("menu-open");
});
