/* =====================================
   PROFILE DATA (GLOBAL SAFE)
===================================== */

window.PROFILE = {
  name: "Amir",
  bio: "Just here, being myself : @Franciszw",
  avatar: "avatar.png",
  verified: true
};


document.addEventListener("DOMContentLoaded", () => {
  const linksContainer = document.getElementById("links");
  const displayTextEl = document.getElementById("display-text");

  window.LINKS.forEach(link => {
    const linkCard = document.createElement("div");
    linkCard.classList.add("link-card");

    // اضافه کردن آیکون
    const icon = document.createElement("i");
    icon.classList.add(...link.icon.split(" "));

    // اضافه کردن متن
    const text = document.createElement("span");
    text.textContent = link.title;

    // ایجاد لینک به جای دکمه
    const linkElement = document.createElement("a");
    linkElement.classList.add("link-button");
    linkElement.href = "#"; // آدرس به دلخواه شما
    linkElement.appendChild(icon);
    linkElement.appendChild(text);

    // افزودن event listener برای کلیک روی دکمه و نمایش متن دلخواه
    linkElement.addEventListener("click", (event) => {
      event.preventDefault(); // جلوگیری از هدایت به لینک
      displayTextEl.textContent = link.text; // نمایش متن دلخواه که شما وارد کرده‌اید
      displayTextEl.style.display = "block"; // نمایش بخش متن
    });

    linkCard.appendChild(linkElement);
    linksContainer.appendChild(linkCard);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  /* ===== PROFILE ===== */
  const avatarEl = document.getElementById("avatar");
  const usernameTextEl = document.getElementById("username-text");
  const bioEl = document.getElementById("bio");
  const badgeEl = document.getElementById("verified-badge");

  /* avatar */
  if (avatarEl && PROFILE.avatar) {
    avatarEl.src = PROFILE.avatar;
  }

  /* username (ONLY TEXT) */
  if (usernameTextEl && PROFILE.name) {
    usernameTextEl.textContent = PROFILE.name;
    usernameTextEl.setAttribute("data-text", PROFILE.name);
  }

  /* bio */
  if (bioEl && PROFILE.bio) {
    bioEl.textContent = PROFILE.bio;
  }

  /* verified badge */
  if (badgeEl) {
    if (PROFILE.verified === true) {
      badgeEl.classList.remove("hidden");
    } else {
      badgeEl.classList.add("hidden");
    }
  }

  /* ===== SOCIAL LINKS ===== */
  const linksContainer = document.getElementById("links");
  const displayTextEl = document.getElementById("display-text");

  // ایجاد لینک‌ها با متن
  window.LINKS.forEach(link => {
    const linkCard = document.createElement("div");
    linkCard.classList.add("link-card");

    // اضافه کردن آیکون
    const icon = document.createElement("i");
    icon.classList.add(...link.icon.split(" "));

    // اضافه کردن متن
    const text = document.createElement("span");
    text.textContent = link.title; // متن نمایش داده شده برای لینک (به جای URL)

    // اضافه کردن دکمه به طور مستقیم (بدون هدایت به URL)
    const button = document.createElement("button");
    button.classList.add("link-button"); // کلاس برای استایل دادن به دکمه
    button.appendChild(icon);
    button.appendChild(text);

    // افزودن event listener برای کلیک روی دکمه و نمایش متن دلخواه
    button.addEventListener("click", () => {
      displayTextEl.textContent = link.text; // نمایش متن دلخواه که شما وارد کرده‌اید
      displayTextEl.style.display = "block"; // نمایش بخش متن
    });

    // اضافه کردن به کارت لینک
    linkCard.appendChild(button);

    // اضافه کردن به کانتینر
    linksContainer.appendChild(linkCard);
  });
});