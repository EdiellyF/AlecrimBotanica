const items = document.querySelectorAll('.item');



items.forEach(item => {
    item.addEventListener('click', () => {
        const conteudo = item.nextElementSibling;
        conteudo.classList.toggle("ativo")
       
    })
})
