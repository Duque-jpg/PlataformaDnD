const mostrador = document.querySelector('.interactivo');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close-btn');

  mostrador.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // También cerrá al hacer clic fuera del contenido
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });