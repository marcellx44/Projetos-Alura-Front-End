//Mensagem inicial de lista vazia
var lista = document.querySelector(".container-lista");
var mensagem_vazia= document.createElement("p");
mensagem_vazia.innerText="A lista ainda está vazia.";
lista.appendChild(mensagem_vazia);
var lista_vazia=true;

//criação da função de salvar item
var btn_salvar= document.getElementById("adicionar-item");
btn_salvar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    var valor = document.getElementById("input-item").value;
    //verifica se o usuário salvou um item vazio
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

        //evento que troca a decoração do item quando é marcado
        checkbox.addEventListener("click", ()=>{            
            if(checkbox.checked){
                nomeItem.style.textDecoration="line-through";
            } else{
                nomeItem.style.textDecoration="none";
            }
        })

        //conexões do DOM
        lista.appendChild(elemento);
        elemento.appendChild(item_novo);
        item_novo.appendChild(checkbox);
        item_novo.appendChild(nomeItem);

        //Inserindo data e hora

        const dia_semana= new Date().toLocaleDateString("pt-BR", {weekday: "long", day: "numeric", month:"2-digit", year: "numeric", hour:"2-digit", minute:"2-digit"} );
        console.log(dia_semana);
        
        var data = document.createElement("p");
        data.classList.add("texto-data");
        data.innerText=dia_semana;
        elemento.appendChild(data);
        lista_vazia=false;
        //verificar se lista está vazia 
       if(lista_vazia===false){
        mensagem_vazia.style.display="none";
       }
       
    }
})