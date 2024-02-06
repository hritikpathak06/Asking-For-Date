const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  window.location.href = "./yes.html"
});

noBtn.addEventListener("click", () => {
  moveNoButton()
});

function moveNoButton() {
  const randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}
