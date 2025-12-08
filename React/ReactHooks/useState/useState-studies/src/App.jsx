import { useState } from 'react';

export default function TodoList() {
  const initialTodos = [{id:0,text:'item 1'},{id:1,text:'item 2'},{id:2,text:'item 3'}];
  const [todos, setTodos] = useState(initialTodos);
  const [valorAtual, setValorAtual] = useState('');
  // let valorNovo=''

  return (
    <>
      <input onChange={(elemento) =>{
        setValorAtual(elemento.target.value)
        console.log(valorAtual);
      }}
        type="text"
       />
      <button onClick={() => {
        setTodos([...todos, {id: todos.length, text:valorAtual}]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
