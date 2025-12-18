/* =====================================
   CYBER EFFECTS — SOCIAL PAGE
===================================== */

document.addEventListener("DOMContentLoaded", () => {
  initTilt();
  initParallax();
  initLinkHover();
  initQRModal();
});

/* =====================================
   3D TILT (CARD)
===================================== */
function initTilt() {
  const card = document.querySelector(".container");
  if (!card) return;

  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    card.style.transform = `
      rotateY(${x}deg)
      rotateX(${y}deg)
    `;
  });

  document.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
}

/* =====================================
   BACKGROUND PARALLAX
===================================== */
function initParallax() {
  const bg = document.querySelector(".bg");
  if (!bg) return;

  document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
}
