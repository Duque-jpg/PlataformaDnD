document.addEventListener("DOMContentLoaded", () => {
  const maximoPerfil = document.getElementById("maximoPerfil");
  if (maximoPerfil) {
    const bioMaximo = document.querySelector(".bio-maximo");
    maximoPerfil.addEventListener("click", () => {
      bioMaximo.classList.toggle("active");
    });
  }

  const caelisPerfil = document.getElementById("caelisPerfil");
  if (caelisPerfil) {
    const bioCaelis = document.querySelector(".bio-caelis");
    caelisPerfil.addEventListener("click", () => {
      bioCaelis.classList.toggle("active");
    });
  }

  const nachoPerfil = document.getElementById("nachoPerfil");
  if (nachoPerfil) {
    const bioNacho = document.querySelector(".bio-nacho");
    NachoPerfil.addEventListener("click", () => {
      bioNacho.classList.toggle("active");
    });
  }
});
