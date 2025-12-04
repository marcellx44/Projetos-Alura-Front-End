import './input.css'
export function Input(props) {
   if(props.type==='submit'){
        return(
            <select className='input-form' defaultValue="selecione">
                <option value="selecione" disabled hidden>Selecione um tema</option>
                <option value="front-end">front-end</option>
                <option value="back-end">back-end</option>
                <option value="devops">devops</option>
                <option value="data science">data science</option>
                <option value="inteligencia artificial">inteligencia artificial</option>
                <option value="cloud">cloud</option>
            </select>
        )
    } else{
       return (
         <input className='input-form' {...props} />
       )
    }
 
}