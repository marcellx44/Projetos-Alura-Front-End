import './card-evento.css';
export function CardEvento({evento}){
    return(
        <div className='container-card'>
            <div className="imagem-evento">
                <img src={evento.capa} />
            </div>
            <div className="conteudo-card">
                <p className='conteudo-nome'>{evento.tema.nome}</p>
                <p className='data'>{evento.data.toLocaleDateString('pt-BR')}</p>
                <h4>{evento.titulo}</h4>
            </div>
        </div>
    )    
}