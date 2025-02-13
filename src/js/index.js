
import {  adicionarPlantaPaginaIndex  } from './styles.js';
import { getCerrado } from './getJsonCerradoData.js';
import {mostrarEventos}  from './cards/timeline.js'
import { addEvento } from './cards/addProjetos.js';

 let plantas = []
 let projetos = [];


document.addEventListener('DOMContentLoaded', () => {

const hamburger = document.querySelector('#hamburger').addEventListener('click', toggleMenu);

       

   const mensagemInicial = document.querySelector("#mensagem-digitada");
   mensagemInicial.innerText = 'Bem-vindo ao AlecrimBotânica!'
   adicionarNatureza()


        function toggleMenu() {
                    const navList = document.getElementById('nav_list');
                    const hamburger = document.querySelector('.hamburger'); 
                    navList.classList.toggle('active');
                    hamburger.classList.toggle('active');
        }

        async function adicionarNatureza() {
                        const planta = await getCerrado();
                        projetos.push(...planta.projetos);
                        plantas.push(...planta.arvores);  
                        plantas.forEach(planta => {   
                        adicionarPlantaPaginaIndex(planta); 
                        })

                         console.log(projetos)

                        projetos.forEach(project => 
                            addEvento(project))
                   
                    mostrarEventos()
              
    }

     
 
       


       
});


 


  