const menuBtn = document.getElementById('menuBtn');
const navOptions = document.getElementById('navOptions');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
    navOptions.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navOptions.classList.remove('show');
});

const imagenPerfil = document.getElementById("imagenPerfil");
const bioPanel = document.querySelector(".bio-panel");

imagenPerfil.addEventListener("click", () => {
  bioPanel.classList.toggle("active");
});

const btn = document.getElementById('btnDesplegar');
const texto = document.getElementById('textoDesplegado');

btn.addEventListener('click', () => {
  texto.classList.toggle('visible');
});
