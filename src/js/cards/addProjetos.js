export function addEvento(evento) {
    const div = document.querySelector('.timeline');
    if (!div) {
        console.error('Elemento .timeline não encontrado');
        return;
    }

    const eventoDiv = document.createElement('div');
    eventoDiv.classList.add('evento');

    const conteudoDiv = document.createElement('div');
    conteudoDiv.classList.add('conteudo');

    const h2 = document.createElement('h2');
    h2.innerHTML = evento.nome;
    conteudoDiv.appendChild(h2);

    const properties = ['descricao', 'objetivo', 'responsaveis', 'parceiros'];

    properties.forEach(prop => {
        if (evento[prop]) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${prop.charAt(0).toUpperCase() + prop.slice(1)}:</strong> ${evento[prop]}`;
            conteudoDiv.appendChild(p);
        }
    });

    eventoDiv.appendChild(conteudoDiv);
    div.appendChild(eventoDiv);
}