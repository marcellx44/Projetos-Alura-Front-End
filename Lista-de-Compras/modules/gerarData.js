function gerarData(){
    const dia_semana= new Date().toLocaleDateString("pt-BR", {weekday: "long", day: "numeric", month:"2-digit", year: "numeric", hour:"2-digit", minute:"2-digit"} );
    var data = document.createElement("p");
    data.classList.add("texto-data");
    data.innerText=dia_semana;
    return data;
}

export default gerarData;