import {  adicionarPlantaPaginaIndex  } from './styles.js';

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
  plantas.push(...planta.arvores);  
  plantas.forEach(planta => {   
     adicionarPlantaPaginaIndex(planta);
   
  })

}


adicionarNatureza()



