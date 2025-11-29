import { Input } from "./Input.jsx";
export function ElementoFormulario(props) {
    return (
        <fieldset>
            <label htmlFor={props.htmlFor}>
                {props.children}
            </label>
            <Input
                type="text"
                id='nome'
                placeholder='Summer dev hits' />
        </fieldset>
    )
}
