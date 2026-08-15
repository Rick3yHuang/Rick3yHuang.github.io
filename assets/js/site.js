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
