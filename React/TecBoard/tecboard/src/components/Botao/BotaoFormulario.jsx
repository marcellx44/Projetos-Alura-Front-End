import './botao-formulario.css'
export  function BotaoFormulario({children, id}){
    return (
        <button id={id} type="submit">{children}</button>
    )
}