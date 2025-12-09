import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount]= useState(0);
  const [text, setText] = useState('');

  function Contador(){
    setCount(count +1);
  }

  function Escreva(elemento){
    setText(elemento.target.value)
  }

  useEffect(()=>{
    if(count>9){
      console.log('Parabens');
    }
  }, [count])

  return (
    <>
      <p>Quantidade de Likes: {count}</p>
      <button onClick={Contador}>Like</button>
      <input onChange={(elemento)=>{Escreva(elemento)}} type="text" />
      <p>O que você digita no input: {text} </p>
    </>
  )
}

export default App
