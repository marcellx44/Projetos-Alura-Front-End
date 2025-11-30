import { Input } from "../Input/Input.jsx";
import './elemento-formulario.css'
export function ElementoFormulario({children, htmlFor, type="text", placeholder}) {
    return (
        <fieldset className="elemento-form">
            <label className='label-form' htmlFor={htmlFor}>
                {children}
            </label>
            <Input
                type={type}
                // id={id}
                placeholder={placeholder} />
        </fieldset>
    )
}
