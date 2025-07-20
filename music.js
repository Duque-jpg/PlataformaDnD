document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const nextBtn = document.getElementById("nextBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const audio = document.getElementById("introMusic");

  const playlistSelect = document.getElementById('playlistSelect');

  playlistSelect.addEventListener('change', () => {
    currentIndex = playlistSelect.selectedIndex;
    loadAndPlay(currentIndex);
  });

  const playlist = [
    "music/ostintro.mp3",
    "music/ostfight1.mp3",
    "music/ostfight2.mp3",
    "music/ostfight3.mp3",
    "music/ostfight4.mp3",
    "music/ostfight5.mp3",
    "music/ostfight6.mp3",
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
  playlistSelect.selectedIndex = index; // sincroniza la lista
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
});