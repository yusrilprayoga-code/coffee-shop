// toggle active

const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector('#daftarmenu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const daftarMenu = document.querySelector ('#daftarmenu');

document.addEventListener('click', function(e) {
    if(!daftarMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});