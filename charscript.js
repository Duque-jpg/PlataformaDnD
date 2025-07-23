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
    nachoPerfil.addEventListener("click", () => {
      bioNacho.classList.toggle("active");
    });
  }

  const splinterPerfil = document.getElementById("splinterPerfil");
  if (splinterPerfil) {
    const bioSplinter = document.querySelector(".bio-splinter");
    splinterPerfil.addEventListener("click", () => {
      bioSplinter.classList.toggle("active");
    });
  }

  const arthurPerfil = document.getElementById("arthurPerfil");
  if (arthurPerfil) {
    const bioArthur = document.querySelector(".bio-arthur");
    arthurPerfil.addEventListener("click", () => {
      bioArthur.classList.toggle("active");
    });
  }

  const pipiPerfil = document.getElementById("pipiPerfil");
  if (pipiPerfil) {
    const bioPipi = document.querySelector(".bio-pipi");
    pipiPerfil.addEventListener("click", () => {
      bioPipi.classList.toggle("active");
    });
  }
  
});