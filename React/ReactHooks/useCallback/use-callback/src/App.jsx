import { useState,useCallback } from 'react';

export default function TodoList() {
  const initialTodos = [{id:0,text:'item 1'},{id:1,text:'item 2'},{id:2,text:'item 3'}];
  const [todos, setTodos] = useState(initialTodos);
  const [valorAtual, setValorAtual] = useState('');
  const [contador, setContador] = useState(0)

  const ContadorMais= useCallback(()=>{
    setContador(contador + 1);
    console.log('+1')
  });
 
  // let valorNovo=''

  return (
    <>
      <input value={valorAtual} onChange={(elemento) =>{
        setValorAtual(elemento.target.value)
        console.log(valorAtual);
      }}
        type="text"
       />
      <button onClick={() => {
        setTodos([...todos, {id: todos.length, text:valorAtual}]);
        setValorAtual('')
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <button onClick={ContadorMais}>Cont</button>
      <p>{contador}</p>
    </>
  );
}
