const cursor = document.querySelector("[data-cursor]");
window.addEventListener("mousemove", function (e) {
  const posx = e.clientX;
  const posy = e.clientY;

  cursor.style.left = `${posx}px`;
  cursor.style.top = `${posy}px`;
});
const txts = document.querySelector(".IntroP");
const txt = document.querySelector(".NameP");
txts.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2.5)";
});
txts.addEventListener("mouseout", () => {
  cursor.style.transform = "scale(1)";
});
txt.addEventListener("mouseover", () => {
  cursor.style.transform = "scale(2.5)";
});
txt.addEventListener("mouseout", () => {
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
const ProjectsBtn = document.querySelector(".PBtn");
const BtnRing = document.querySelector(".btnRing");
const planet = document.querySelector(".planet");
ProjectsBtn.addEventListener("mouseover", () => {
  ProjectsBtn.style.scale = "0.8";
  BtnRing.style.border = "2px solid black";
  planet.style.display = "block";
});
ProjectsBtn.addEventListener("mouseout", () => {
  ProjectsBtn.style.scale = "1";
  BtnRing.style.border = "none";
  planet.style.display = "none";
});
