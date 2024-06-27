let menuIcon = document.getElementById('menu-icon');
let mainContent = document.getElementById('main');
let navBar = document.getElementById('nav-bar');
let ulAbout = document.getElementById('ul-about');
let ulAboutIcon = document.getElementById('ul-about-icon');
let ulAboutDados = document.getElementById('ul-about-dados');
let ulExperiencia = document.getElementById('ul-experiencias');
let ulExperienciaIcon = document.getElementById('ul-experiencias-icon');
let ulExperienciaDados = document.getElementById('ul-experiencias-dados');
let biografia = document.getElementById('biografia');
let tecnologias = document.getElementById('tecnologias');
let formacao = document.getElementById('formacao');
let kirei = document.getElementById('kirei');

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

    function loadContent(event) {
        const section = event.currentTarget.getAttribute("data-section");
        const contentSection = document.getElementById("content-section");
    
        document.querySelectorAll("#ul-about-dados .text-white").forEach(item => {
            item.classList.remove('text-white');
        });
    
        document.querySelectorAll("#ul-experiencias-dados .text-white").forEach(item => {
            item.classList.remove('text-white');
        });
    
        contentSection.innerHTML = "";
    
        switch (section) {
            case "biografia":
                contentSection.innerHTML =  '<p><span class="text-white">// informações</span> / biografia</p>' +
                '<p class="mt-4">Já trabalhei com Marketing, criando artes cativantes e envolventes para os clientes. Migrei para a área de programação, focando no desenvolvimento Front-end. Estou buscando aplicar meu aprendizado para contribuir no desenvolvimento de soluções inovadoras, além de desenvolver minha carreira e aprimorar minhas habilidades.</p>';
                biografia.classList.add('text-white');
                break;
            case "tecnologias":
                contentSection.innerHTML = '<p><span class="text-white">// informações</span> / tecnologias</p>' +
                '<p class="mt-4">Tenho experiência em HTML, CSS, Tailwind CSS e JavaScript para criar interfaces web modernas e responsivas.</p>';
                tecnologias.classList.add('text-white');
                break;
            case "formacao":
                contentSection.innerHTML = '<p><span class="text-white">// informações</span> / formação</p>' +
                '<p class="mt-4">Estou cursando Engenharia de Software na UniCesumar desde janeiro de 2023.</p>';
                formacao.classList.add('text-white');
                break;
            case "kirei":
                contentSection.innerHTML = '<p><span class="text-white">// experiências</span> / Kirei Cosméticos</p>' +
                '<p class="mt-4">Tenho experiência como Marketing na Kirei Cosméticos desde março de 2022, onde sou responsável pela criação de textos para campanhas publicitárias e legendas para redes sociais, atendimento ao cliente presencialmente e online, além da edição de vídeos e fotos utilizando Adobe Photoshop e Adobe Premiere.</p>';
                kirei.classList.add('text-white');
                break;
            default:
                contentSection.innerHTML = "<p>Conteúdo não encontrado</p>";
        }
    }
    
    document.querySelectorAll("[data-section]").forEach(item => {
        item.addEventListener("click", loadContent);
    });

}

