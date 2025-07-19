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