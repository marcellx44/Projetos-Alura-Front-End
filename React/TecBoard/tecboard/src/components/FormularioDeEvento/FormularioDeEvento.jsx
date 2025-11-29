import { TituloFormulario } from "../TituloFormulario/TituloFormulario.jsx";
import { ElementoFormulario } from "../ElementoFormulario/ElementoFormulario.jsx";
import './formulario-de-evento.css'

//function ElementoFormulario({children, htmlFor}) 
export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <ElementoFormulario>
        Qual é o nome do evento
      </ElementoFormulario>
    </form>
  )
}
