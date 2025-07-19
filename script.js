const menuBtn = document.getElementById('menuBtn');
const navOptions = document.getElementById('navOptions');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
    navOptions.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navOptions.classList.remove('show');
});

const boton = document.getElementById("musicToggle");
  const musica = document.getElementById("introMusic");

  let reproduciendo = false;

  boton.addEventListener("click", () => {
    if (reproduciendo) {
      musica.pause();
      boton.textContent = "🔇";
    } else {
      musica.play();
      boton.textContent = "🔊";
    }
    reproduciendo = !reproduciendo;
  });

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header-img-container');
  if(header) {
    header.style.opacity = '1'; // para que no se quede invisible en navegadores lentos
  }
});
