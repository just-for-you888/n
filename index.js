document.addEventListener("DOMContentLoaded", () => {

  const displayTextEl = document.getElementById("display-text");

  const messageLinks = document.querySelectorAll(".message-link:not(.final-message)");
  const finalMessageLink = document.querySelector(".final-message");
  const finalMessageCard = finalMessageLink?.closest(".link-card");

  // 🔐 دکمه / لینک ورود با رمز
  const loginLink = document.querySelector(".login-link");

  let hideTimer = null;
  let typingTimer = null;

  /* ---------- افکت تایپ ---------- */
  function typeMessage(text, speed = 35, duration = 15000) {
    displayTextEl.textContent = "";
    displayTextEl.style.display = "block";

    clearTimeout(hideTimer);
    clearInterval(typingTimer);

    let i = 0;
    typingTimer = setInterval(() => {
      if (i < text.length) {
        displayTextEl.textContent += text[i++];
      } else {
        clearInterval(typingTimer);
        hideTimer = setTimeout(() => {
          displayTextEl.style.display = "none";
        }, duration);
      }
    }, speed);
  }

  /* ---------- وضعیت قفل ---------- */
  function isUnlocked() {
    return sessionStorage.getItem("unlocked") === "true";
  }

  function hideLoginButton() {
    if (!loginLink) return;
    if (isUnlocked()) {
      loginLink.style.display = "none";
    } else {
      loginLink.style.display = "";
    }
  }

  function isRead(key) {
    return sessionStorage.getItem("read_" + key) === "true";
  }

  function markAsRead(key) {
    sessionStorage.setItem("read_" + key, "true");
  }

  /* ---------- وضعیت دکمه پیام‌ها ---------- */
  function updateButtonsState() {
    messageLinks.forEach(link => {
      const icon = link.querySelector("i");
      const text = link.querySelector("span");
      const key = link.dataset.text;

      if (isRead(key)) {
        icon.className = "fa-solid fa-check";
        icon.style.color = "#2ecc71";
        text.textContent = "خوانده شد";
        link.classList.add("message-read");
        return;
      }

      if (isUnlocked()) {
        icon.className = "fa-regular fa-heart";
        icon.style.color = "";
        text.textContent = "New Message Andia 🤍";
      } else {
        icon.className = "fa-solid fa-lock";
        icon.style.color = "";
        text.textContent = "New Message Andia";
      }
    });
  }

  function checkFinalMessage() {
    const allRead = [...messageLinks].every(link =>
      isRead(link.dataset.text)
    );

    if (allRead && finalMessageCard) {
      finalMessageCard.style.display = "block";
    }
  }

  /* ---------- وضعیت اولیه ---------- */
  updateButtonsState();
  checkFinalMessage();
  hideLoginButton();

  /* ---------- پیام‌های معمولی ---------- */
  messageLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const key = link.dataset.text;

      if (isRead(key)) return;

      if (!isUnlocked()) {
        typeMessage("اول رمز وارد کن 🔒", 30, 8000);
        return;
      }

      typeMessage(key, 35, 20000);
      markAsRead(key);
      updateButtonsState();
      checkFinalMessage();
    });
  });

  /* ---------- پیام نهایی ---------- */
  if (finalMessageLink) {
    finalMessageLink.addEventListener("click", e => {
      e.preventDefault();

      const key = finalMessageLink.dataset.text;

      if (isRead(key)) return;

      if (!isUnlocked()) {
        typeMessage("اول رمز وارد کن 🔒", 30, 8000);
        return;
      }

      typeMessage(key, 40, 25000);
      markAsRead(key);

      finalMessageLink.innerHTML = `
        <i class="fa-solid fa-check"></i>
        <span>خوانده شد</span>
      `;
      finalMessageLink.querySelector("i").style.color = "#2ecc71";
      finalMessageLink.style.pointerEvents = "none";
      finalMessageLink.style.opacity = "0.7";
    });
  }

});