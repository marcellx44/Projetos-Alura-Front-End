import { useState } from 'react';

const initialTodos = [{id:0,text:'item 1'},{id:1,text:'item 2'},{id:2,text:'item 3'}];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const value= 'teste'

  return (
    <>
      <button onClick={() => {
        setTodos([...todos, {id: todos.length, text:value}]);
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
