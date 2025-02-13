export const mostrarEventos = () => {
    const eventos = document.querySelectorAll(".evento");
    const alturaTela = window.innerHeight; // altura visível da tela

    eventos.forEach(evento => {
        const posicao = evento.getBoundingClientRect().top;

        if (posicao < alturaTela * 0.80) {
            evento.classList.add("mostrar");
        }
    });


    eventos.forEach(event => {
        event.addEventListener('mouseover', () => aplicarSombra(event));
        event.addEventListener('mouseout', () => removerSombra(event));
    });
     

    
};





window.addEventListener("scroll", mostrarEventos);



function aplicarSombra(elemento) {
    if (!elemento.dataset.textoOriginal) {
        elemento.dataset.textoOriginal = elemento.innerHTML; // Salva o texto original
    }

    const imagem = elemento.querySelector(".imagem-floresta"); // Seleção da imagem dentro do elemento
    if (imagem && !imagem.classList.contains("ativo")) { // Verifica se a imagem ainda não tem a classe "ativo"
        imagem.classList.add("ativo"); // Aplica a classe 'ativo' à imagem
            }
}

function removerSombra(elemento) {
    if (elemento.dataset.textoOriginal) {
        elemento.innerHTML = elemento.dataset.textoOriginal; // Restaura o texto original
    }
    
    const imagem = elemento.querySelector(".imagem-floresta"); // Seleção da imagem dentro do elemento
    if (imagem && imagem.classList.contains("ativo")) { // Verifica se a imagem ainda não tem a classe "ativo"
        imagem.classList.remove("ativo"); // Remove a classe 'ativo' da imagem
        imagem.style.transition = 'none';
        imagem.style.transform = 'none'; 
    }
}



