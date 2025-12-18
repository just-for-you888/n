document.addEventListener("DOMContentLoaded", () => {
  const linksContainer = document.getElementById("links");
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");
  const closeModal = document.getElementById("close-modal");

  window.LINKS.forEach(link => {
    const linkCard = document.createElement("div");
    linkCard.classList.add("link-card");

    const icon = document.createElement("i");
    icon.classList.add(...link.icon.split(" "));

    const text = document.createElement("span");
    text.textContent = link.title;

    const button = document.createElement("button");
    button.classList.add("link-button");
    button.appendChild(icon);
    button.appendChild(text);

    // Event listener for opening modal with text
    button.addEventListener("click", () => {
      modalText.textContent = `You clicked on ${link.title}`; // Set the text dynamically
      modal.classList.add("show"); // Show the modal
    });

    linkCard.appendChild(button);
    linksContainer.appendChild(linkCard);
  });

  // Close the modal
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Close the modal if clicked outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const linksContainer = document.getElementById("links");
  const displayTextEl = document.getElementById("display-text");

  window.LINKS = [
    {
      title: "New Message Andia",
      text: "",
      icon: "fa-brands fa-diaspora"
    }
  ];

  window.LINKS.forEach(link => {
    const linkCard = document.createElement("div");
    linkCard.classList.add("link-card");

    const icon = document.createElement("i");
    icon.classList.add(...link.icon.split(" "));

    const text = document.createElement("span");
    text.textContent = link.title;

    const linkElement = document.createElement("a");
    linkElement.classList.add("link-button");
    linkElement.href = "#";
    linkElement.appendChild(icon);
    linkElement.appendChild(text);

    linkElement.addEventListener("click", (e) => {
      e.preventDefault();

      // ایجاد تگ <span> برای رنگ قرمز
      const spanElement = document.createElement("span");
      spanElement.style.color = "#FF0000";  // تعیین رنگ قرمز برای متن
      spanElement.textContent = "فقط خاستم بدونی همیشه به یادتم❤️‍🔥";  // افزودن محتوای تگ <span>

      // اضافه کردن تگ <span> به متن
      displayTextEl.innerHTML = '';  // پاک کردن متن قبلی
      displayTextEl.appendChild(spanElement);  // اضافه کردن span به displayTextEl
      displayTextEl.style.display = "block";  // نمایش متن
    });

    linkCard.appendChild(linkElement);
    linksContainer.appendChild(linkCard);
  });
});
