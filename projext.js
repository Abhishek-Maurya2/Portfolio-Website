const ProjectsBtn = document.querySelector(".PBtn");
const BtnRing = document.querySelector(".btnRing");
const planet = document.querySelector(".planet");
ProjectsBtn.addEventListener("mouseover", () => {
  ProjectsBtn.style.scale = "0.8";
  BtnRing.style.border = "solid black";
  planet.style.display = "block";
});
ProjectsBtn.addEventListener("mouseout", () => {
  ProjectsBtn.style.scale = "1";
  BtnRing.style.border = "none";
  planet.style.display = "none";
});
