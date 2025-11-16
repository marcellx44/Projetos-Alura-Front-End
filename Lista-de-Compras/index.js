import { criarItem } from "./modules/CriarItem.js";
//Mensagem inicial de lista vazia
const lista_vazia = document.querySelector(".container-lista");
var mensagem_vazia= document.createElement("p");
mensagem_vazia.innerText="A lista ainda está vazia.";
lista_vazia.appendChild(mensagem_vazia);
var vazia=true;

var lista= document.getElementById("lista-de-compras");
var btn_salvar= document.getElementById("adicionar-item");
btn_salvar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    var valor= document.getElementById("input-item").value;
    if(valor===""){
        console.log("vazio");
    }else{
        var novo_item= criarItem(valor);
        lista.appendChild(novo_item);
        vazia=false;
        //verificação da lista vazia;
        if(vazia===false){
            mensagem_vazia.style.display="none";
        }
    }

})

console.log(vazia);