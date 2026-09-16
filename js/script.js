const headerMenu = document.getElementById("headerMenu");
const humberger = document.getElementById("humberger");

humberger.addEventListener("click", () => {
  if (!headerMenu.classList.contains("loaded")) headerMenu.classList.add("loaded");
  headerMenu.classList.toggle("menu-open");
});
