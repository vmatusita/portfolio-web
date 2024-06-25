let menuIcon = document.getElementById('menu-icon');
let mainContent = document.getElementById('main');
let navBar =  document.getElementById('nav-bar');

window.onload = function() {
    menuIcon.addEventListener('click', function() {
        this.getAttribute('class') === 'ri-menu-fill'
            ? (this.setAttribute('class', 'ri-close-large-fill'), navBar.classList.remove('hidden'), mainContent.classList.add('hidden'))
            : (this.setAttribute('class', 'ri-menu-fill'), navBar.classList.add('hidden'), mainContent.classList.remove('hidden'));
    }); 
}