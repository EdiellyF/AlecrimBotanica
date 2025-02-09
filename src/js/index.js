
document.addEventListener('DOMContentLoaded', () => {

const hamburger = document.querySelector('#hamburger').addEventListener('click', toggleMenu);

        function toggleMenu() {
            const navList = document.getElementById('nav_list');
            const hamburger = document.querySelector('.hamburger'); 
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

   const mensagemInicial = document.querySelector("#mensagem-digitada");
   mensagemInicial.innerText = 'Bem-vindo ao AlecrimBotânica!'


   



});

