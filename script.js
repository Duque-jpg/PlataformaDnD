const menuBtn = document.getElementById('menuBtn');
const navOptions = document.getElementById('navOptions');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
    navOptions.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navOptions.classList.remove('show');
});

const btn = document.getElementById('btnDesplegar');
const texto = document.getElementById('textoDesplegado');

btn.addEventListener('click', () => {
  texto.classList.toggle('visible');
});