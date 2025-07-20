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
    "music/ostfight7.mp3",
    "music/ostfight8.mp3",
    "music/ostfight9.mp3",
    "music/ostfight10.mp3",
    "music/ostboss.mp3",
    "music/ostboss2.mp3",
    "music/osttension1.mp3",
    "music/osttension2.mp3",
    "music/osttension3.mp3",
    "music/ostmarina.mp3",
    "music/ostescape.mp3",
    "music/ostconfuso.mp3",
    "music/ostisladestruida.mp3",
    "music/osttriste.mp3",
    "music/ostpueblo1.mp3",
    "music/ostpueblo2.mp3",
    "music/ostpueblo3.mp3",
    "music/ostpueblo4.mp3",
    "music/ostpueblo5.mp3",
    "music/ostpueblo6.mp3",
    "music/ostisladespedida.mp3",
    "music/osttienda.mp3",
    "music/ostvictoria.mp3",
    "music/ostnav1.mp3",
    "music/ostnav2.mp3",
    "music/ostnav3.mp3",
    "music/ostnav4.mp3"
  ];

  // <option value="">Intro Record Keeper</option>
// <option value="">Música de pelea 1</option>
// <option value="">Música de pelea 2</option>
// <option value="">Música de pelea 3</option>
// <option value="">Música de pelea 4</option>
// <option value="">Música de pelea 5</option>
// <option value="">Música de pelea 6</option>
// <option value="">Música de pelea 7</option>
// <option value="">Música de pelea 8</option>
// <option value="">Música de pelea 9</option>
// <option value="">Música de pelea 10</option>
// <option value="">Música de Boss</option>
// <option value="">Música de Boss 2</option>
// <option value="">Música de tensión 1</option>
// <option value="">Música de tensión 2</option>
// <option value="">Música de tensión 3</option>
// <option value="">Apareció la Marina!</option>
// <option value="">Escape</option>
// <option value="">Confuso</option>
// <option value="">Isla destuida</option>
// <option value="">Tristeza</option>
// <option value="">Pueblo 1</option>
// <option value="">Pueblo 2</option>
// <option value="">Pueblo 3</option>
// <option value="">Pueblo 4</option>
// <option value="">Pueblo 5</option>
// <option value="">Pueblo 6</option>
// <option value="">Despidiendo la Isla</option>
// <option value="">Tienda</option>
// <option value="">Victoria</option>
// <option value="">Navegando 1</option>
// <option value="">Navegando 2</option>
// <option value="">Navegando 3</option>
// <option value="">Navegando 4</option>



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