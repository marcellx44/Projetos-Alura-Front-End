import { TituloFormulario } from "../TituloFormulario/TituloFormulario.jsx";
import { ElementoFormulario } from "../ElementoFormulario/ElementoFormulario.jsx";
import  {BotaoFormulario}  from "../Botao/BotaoFormulario.jsx";
import './formulario-de-evento.css'

//function ElementoFormulario({children, htmlFor}) 
export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <ElementoFormulario
        htmlFor="nome"
        type="text"
        placeholder="Summer dev hits">
        Qual é o nome do evento?
      </ElementoFormulario>
      <ElementoFormulario
        htmlFor="endereço"
        type="text"
        placeholder="Copie a URL aqui"
      >
        Qual o endereço da imagem de capa?
      </ElementoFormulario>
      <ElementoFormulario
        htmlFor="data"
        type="date"
        placeholder="DD/MM/AAA">
        Data do Evento
      </ElementoFormulario>
      <ElementoFormulario htmlFor="tema-evento" type="submit" placeholder="Selecione uma opção">
        Tema evento:
      </ElementoFormulario>
      <div className="container-botao-form">
        <BotaoFormulario id="btn-form">
          Criar evento
        </BotaoFormulario>
      </div>
    </form>
  )
}
