let plantas = []


async function getCerrado() {
    const resp = await fetch("src/js/cerrado.json")
    if(resp.status === 200){
        const obj = await resp.json()
        const objs = obj
        return objs;
    } else {
        console.error("Erro ao carregar dados");
        return [];
      }

}

async function adicionarNatureza() {
    const planta = await getCerrado();
  
    

    //renderizacao arvores
  plantas.push(...planta.arvores);  
  const div = document.getElementById("arvores");

  plantas.forEach(planta => {
    console.log(planta)

    let nome = document.createElement('p');
  nome.textContent = `🌿 Nome: ${planta.nome}`;
  
  // Imagem da planta
  let img = document.createElement('img');
  img.src = planta.imagem;
  img.alt = planta.nome;
  img.style.width = "200px";
  img.style.display = "block";
  img.style.margin = "10px 0";

  // Demais informações
  let idade = document.createElement('p');
  idade.textContent = `🌳 Idade: ${planta.idade}`;

  let altura = document.createElement('p');
  altura.textContent = `📏 Altura: ${planta.altura}`;

  let diametro = document.createElement('p');
  diametro.textContent = `⚪ Diâmetro do Tronco: ${planta.diametro_do_tronco}`;

  let localizacao = document.createElement('p');
  localizacao.textContent = `📍 Localização: ${planta.localizacao}`;

  let condicaoSaude = document.createElement('p');
  condicaoSaude.textContent = `🩺 Condição de Saúde: ${planta.condicao_de_saude}`;

  let historicoPodas = document.createElement('p');
  historicoPodas.textContent = `✂️ Histórico de Podas: ${planta.historico_de_podas}`;
    
        div.appendChild(nome);
        div.appendChild(img);
        div.appendChild(idade);
        div.appendChild(altura);
        div.appendChild(diametro);
        div.appendChild(localizacao);
        div.appendChild(condicaoSaude);
        div.appendChild(historicoPodas);
  })

    


    
}


adicionarNatureza()