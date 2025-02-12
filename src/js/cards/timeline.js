export const mostrarEventos = () => {
    const eventos = document.querySelectorAll(".evento");
    const alturaTela = window.innerHeight; // altura visível da tela

    eventos.forEach(evento => {
        const posicao = evento.getBoundingClientRect().top;

        if (posicao < alturaTela * 0.80) {
            evento.classList.add("mostrar");
        }
    });

    eventos.forEach(evento => {
        evento.addEventListener('mouseover', () => {
          
        });
    });
};





window.addEventListener("scroll", mostrarEventos);
document.addEventListener("DOMContentLoaded", mostrarEventos);






