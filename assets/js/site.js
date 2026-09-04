const emailButtons = document.querySelectorAll(".email-copy");
const copyToast = document.querySelector(".copy-toast");
let toastTimer;

async function copyEmail(event) {
  const email = event.currentTarget.dataset.email;

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

if (copyToast) {
  emailButtons.forEach((button) => button.addEventListener("click", copyEmail));
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

document.querySelectorAll("[data-scroll-next]").forEach((list) => {
  const now = new Date();
  const events = [...list.querySelectorAll(".current-course-announcement")];

  events.forEach((event) => {
    const end = new Date(event.dataset.eventEnd);
    const isPast = !Number.isNaN(end.getTime()) && end < now;
    event.classList.toggle("is-past", isPast);
  });

  const nextEvent = events.find((event) => !event.classList.contains("is-past")) || events.at(-1);

  if (nextEvent) {
    window.requestAnimationFrame(() => {
      list.scrollTop = nextEvent.offsetTop;
    });
  }
});

const themeToggle = document.querySelector(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const siteNavToggle = document.querySelector(".site-nav-toggle");
const primaryNavigation = document.getElementById("primary-navigation");

function setNavigationOpen(open) {
  if (!siteNavToggle || !primaryNavigation) return;
  primaryNavigation.hidden = !open;
  siteNavToggle.setAttribute("aria-expanded", String(open));
  siteNavToggle.setAttribute("aria-label", open ? "Hide navigation" : "Show navigation");
  siteNavToggle.title = open ? "Hide navigation" : "Show navigation";
}

if (siteNavToggle && primaryNavigation) {
  setNavigationOpen(siteNavToggle.getAttribute("aria-expanded") === "true");
  siteNavToggle.addEventListener("click", () => {
    setNavigationOpen(primaryNavigation.hidden);
  });
}

const courseContextBack = document.querySelector("[data-course-context-back]");

if (courseContextBack) {
  const requestedContext = new URLSearchParams(window.location.search).get("from");
  const referrerPath = document.referrer ? new URL(document.referrer).pathname : "";
  const courseContext = requestedContext === "current" || requestedContext === "teaching"
    ? requestedContext
    : (referrerPath === "/teaching/math-1553/" ? "current" : "teaching");
  const contextLabel = courseContextBack.querySelector("[data-course-context-label]");

  courseContextBack.href = courseContext === "current"
    ? courseContextBack.dataset.currentCourseUrl
    : courseContextBack.dataset.teachingUrl;
  if (contextLabel) {
    contextLabel.textContent = courseContext === "current" ? "Current course" : "Teaching";
  }

  document.querySelectorAll(".course-archive__terms a").forEach((link) => {
    const url = new URL(link.href);
    if (url.pathname.startsWith("/teaching/math-1553/")) {
      url.searchParams.set("from", courseContext);
      link.href = url.href;
    }
  });
}

function updateThemeButton() {
  if (!themeToggle) return;
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("aria-pressed", String(dark));
}

function applySystemTheme(event = systemTheme) {
  document.documentElement.dataset.theme = event.matches ? "dark" : "light";
  updateThemeButton();
}

if (themeToggle) {
  updateThemeButton();
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    updateThemeButton();
  });
}

systemTheme.addEventListener("change", applySystemTheme);
