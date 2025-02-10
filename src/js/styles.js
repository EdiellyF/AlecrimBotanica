export function adicionarPlantaPaginaIndex(planta) {
        
    const div = document.getElementById("arvores");
    
    const plantaDiv = document.createElement('div');


    
        
        
    let img = document.createElement('img');
    img.src = planta.imagem;
    img.alt = planta.nome;
  img.loading = "lazy"
        //Conteiner para as informações da planta
       const infoDiv = document.createElement('div');
       infoDiv.classList.add("info");



        const plantaInfos = [
            {emoji: "🌿", label: "Pesquisador", value: planta.pesquisador},
            { emoji: "🌿", label: "Nome", value: planta.nome },
            { emoji: "🌳", label: "Idade", value: planta.idade },
            { emoji: "📏", label: "Altura", value: planta.altura },
            { emoji: "⚪", label: "Diâmetro do Tronco", value: planta.diametro_do_tronco },
            { emoji: "📍", label: "Localização", value: planta.localizacao },
            { emoji: "🩺", label: "Condição de Saúde", value: planta.condicao_de_saude },
            { emoji: "✂️", label: "Histórico de Podas", value: planta.historico_de_podas },
          ];

     
           plantaInfos.forEach(({emoji, label, value}) => {
                const p = document.createElement('p');
                p.classList.add("item");
                p.innerHTML = `${emoji} <strong>${label}:</strong> ${value}`;
                div.appendChild(p);

              
                infoDiv.appendChild(p);
            }); 


        plantaDiv.appendChild(img);
        plantaDiv.appendChild(infoDiv);


        plantaDiv.classList.add("card");

        div.appendChild(plantaDiv);
          
 


}



