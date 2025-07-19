document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const nextBtn = document.getElementById("nextBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const audio = document.getElementById("introMusic");

  const playlist = [
    "ostfa.mp3",
    "ostov.mp3",
    "musica/tema3.mp3"
  ];
  let currentIndex = 0;
  let isRepeating = false;

  function updateButtons() {
    playBtn.style.display = audio.paused ? "inline" : "none";
    pauseBtn.style.display = audio.paused ? "none" : "inline";
    repeatBtn.style.opacity = isRepeating ? "1" : "0.5";
  }

  function loadAndPlay(index) {
    audio.src = playlist[index];
    audio.play();
    updateButtons();
  }

  playBtn.addEventListener("click", () => {
  loadAndPlay(currentIndex);
});

  pauseBtn.addEventListener("click", () => {
    audio.pause();
    updateButtons();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadAndPlay(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadAndPlay(currentIndex);
  });

  repeatBtn.addEventListener("click", () => {
    isRepeating = !isRepeating;
    audio.loop = isRepeating;
    updateButtons();
  });

  audio.addEventListener("ended", () => {
    if (!isRepeating) {
      currentIndex = (currentIndex + 1) % playlist.length;
      loadAndPlay(currentIndex);
    }
  });

  // Inicialización después de cargar
  loadAndPlay(currentIndex);
});
