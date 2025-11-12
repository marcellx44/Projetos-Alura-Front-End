//Captura o valor ao clicar em salvar item
var btn_salvar= document.getElementById("adicionar-item");
btn_salvar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    var valor = document.getElementById("input-item").value;
    if(valor===""){
        console.log("Vazio");
        return
    } else{
        var lista= document.getElementById("lista-de-compras");
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
        
        lista.appendChild(elemento);
        elemento.appendChild(item_novo);
        item_novo.appendChild(checkbox);
        item_novo.appendChild(nomeItem);

        const dia_semana= new Date().toLocaleDateString("pt-BR", {weekday: "long", day: "numeric", month:"2-digit", year: "numeric", hour:"2-digit", minute:"2-digit"} );
        console.log(dia_semana);
        
        var data = document.createElement("p");
        data.classList.add("texto-data");
        data.innerText=dia_semana;
        elemento.appendChild(data);
    }
})