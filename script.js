const menuBtn = document.getElementById('menuBtn');
const navOptions = document.getElementById('navOptions');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
    navOptions.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    navOptions.classList.add('hidden');
});