const cursor = document.querySelector("[data-cursor]");
window.addEventListener("mousemove", function (e) {
  const posx = e.clientX;
  const posy = e.clientY;

  cursor.style.left = `${posx}px`;
  cursor.style.top = `${posy}px`;
});
const txts = document.querySelector(".NameP");
txts.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2.5)";
});
txts.addEventListener("mouseout", () => {
  cursor.style.transform = "scale(1)";
});
document.querySelector(".c").addEventListener("mouseover", () => {
  cursor.style.display = "none";
});
document.querySelector(".c").addEventListener("mouseout", () => {
  cursor.style.display = "block";
});
const AboutBtn = document.querySelector(".AboutBtn");
AboutBtn.addEventListener("click", () => {
    AboutBtn.style.scale = "0.8";
});
