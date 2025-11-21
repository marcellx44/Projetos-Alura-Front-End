import gerarData from "./gerarData.js";
export function criarItem(valor){
        var elemento = document.createElement("li");      
        var item_novo= document.createElement("div");
        item_novo.classList.add("lista-item-container");
        var checkbox= document.createElement("input")
        checkbox.type="checkbox";
        let contador=1;
        contador++;
        checkbox.id="checkbox-"+ contador;
        
        var nomeItem= document.createElement("p");
        nomeItem.innerText=valor;

        //evento que troca a decoração do item quando é marcado
        checkbox.addEventListener("click", ()=>{            
            if(checkbox.checked){
                nomeItem.style.textDecoration="line-through";
            } else{
                nomeItem.style.textDecoration="none";
            }
        })

        //conexões do DOM

        elemento.appendChild(item_novo);
        item_novo.appendChild(checkbox);
        item_novo.appendChild(nomeItem);

        //Inserindo data e hora

        const data= gerarData();
        elemento.appendChild(data);
        
        return elemento;
    }