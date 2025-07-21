const galleryImages = document.querySelectorAll('.gallery img');
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');
    const closeBtn = document.getElementById('closeBtn');

    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('visible');
      });
    });

    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('visible');
      overlayImg.src = '';
    });

    // Cerrar al hacer click fuera de la imagen
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('visible');
        overlayImg.src = '';
      }
    });