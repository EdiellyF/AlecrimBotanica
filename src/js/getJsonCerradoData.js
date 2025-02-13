import {  adicionarPlantaPaginaIndex  } from './styles.js';

let plantas = []


export async function getCerrado() {
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





