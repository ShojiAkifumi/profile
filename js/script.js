//ハンバーガーメニュー
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

//フェードイン
const mainV = document.getElementById("main-v");
const targets = document.querySelectorAll(".fade-target");

const triggerHeight = window.screen.height * 0.6;

function checkFadeIn() {
  mainV.classList.add("main-loaded");
  targets.forEach((target) => {
    const rect = target.getBoundingClientRect();

    if (["main-field", "name-jp"].some((cls) => target.classList.contains(cls))) {
      target.classList.add("is-visible");
    } else if (rect.top <= triggerHeight) {
      target.classList.add("is-visible");
    }
  });
}

window.addEventListener("scroll", checkFadeIn);
window.addEventListener("load", checkFadeIn);

//タイピング
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const text = element.textContent.trim();

      element.textContent = "";

      const cursor = document.createElement("span");
      cursor.className = "typing-cursor";

      let index = 0;

      function typeText() {
        if (index < text.length) {
          const char = document.createElement("span");
          char.className = "typing-char";

          if (text[index] === " ") {
            char.innerHTML = "&nbsp;";
          } else {
            char.textContent = text[index];
          }

          element.appendChild(char);
          element.appendChild(cursor);

          index++;

          setTimeout(typeText, 40 + Math.random() * 50);
        } else {
          // タイピング完了後、カーソルを削除
          cursor.remove();
        }
      }

      typeText();

      // 一度だけ実行
      observer.unobserve(element);
    });
  },
  {
    rootMargin: "-30% 0px -30% 0px",
  },
);

document.querySelectorAll(".typing-text").forEach((element) => {
  observer.observe(element);
});
