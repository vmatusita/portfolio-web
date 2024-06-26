let menuIcon = document.getElementById('menu-icon');
let mainContent = document.getElementById('main');
let navBar = document.getElementById('nav-bar');
let ulAbout = document.getElementById('ul-about');
let ulAboutIcon = document.getElementById('ul-about-icon');
let ulAboutDados = document.getElementById('ul-about-dados');
let ulExperiencia = document.getElementById('ul-experiencias');
let ulExperienciaIcon = document.getElementById('ul-experiencias-icon');
let ulExperienciaDados = document.getElementById('ul-experiencias-dados');

window.onload = function() {
    
    menuIcon.addEventListener('click', function() {
        this.getAttribute('class') === 'ri-menu-fill'
            ? (this.setAttribute('class', 'ri-close-large-fill'), navBar.classList.remove('hidden'), mainContent.classList.add('hidden'))
            : (this.setAttribute('class', 'ri-menu-fill'), navBar.classList.add('hidden'), mainContent.classList.remove('hidden'));
    }); 

    function toggleMenu(icon, dados) {
        icon.getAttribute('class') === 'ri-arrow-right-s-fill'
            ? (icon.setAttribute('class', 'ri-arrow-down-s-fill'), dados.classList.remove('hidden'))
            : (icon.setAttribute('class', 'ri-arrow-right-s-fill'), dados.classList.add('hidden'));
    }

    ulAbout.addEventListener('click', function() {
        toggleMenu(ulAboutIcon, ulAboutDados);
    }); 

    ulExperiencia.addEventListener('click', function() {
        toggleMenu(ulExperienciaIcon, ulExperienciaDados);
    }); 

}

