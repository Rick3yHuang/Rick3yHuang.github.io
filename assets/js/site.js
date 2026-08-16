const emailButton = document.querySelector(".email-copy");
const copyToast = document.querySelector(".copy-toast");
let toastTimer;

async function copyEmail() {
  const email = emailButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  copyToast.textContent = `Email copied: ${email}`;
  copyToast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 2400);
}

if (emailButton && copyToast) {
  emailButton.addEventListener("click", copyEmail);
}

function showToast(message) {
  if (!copyToast) return;
  copyToast.textContent = message;
  copyToast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => copyToast.classList.remove("is-visible"), 2400);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
}

document.querySelectorAll(".citation-action--cite").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const willOpen = panel.hidden;
    panel.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
    button.textContent = willOpen ? "Close citation" : "Cite";
  });
});

document.querySelectorAll(".citation-copy").forEach((button) => {
  button.addEventListener("click", async () => {
    const bibtex = document.getElementById(button.dataset.bibtexId)?.textContent.trim();
    if (!bibtex) return;
    await copyText(bibtex);
    showToast("BibTeX copied");
  });
});

const themeToggle = document.querySelector(".theme-toggle");

function updateThemeButton() {
  if (!themeToggle) return;
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("aria-pressed", String(dark));
}

if (themeToggle) {
  updateThemeButton();
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeButton();
  });
}
