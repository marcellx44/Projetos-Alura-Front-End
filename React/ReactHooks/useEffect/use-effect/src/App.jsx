import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount]= useState(0);
  const [text, setText] = useState('');
  const [coordenadas, setCoordenadas] = useState({x:0, y:0})

  useEffect(() => {
     function mudandoCoordenadas(e){
       setCoordenadas({x:e.clientX, y: e.clientY});
     }
    window.addEventListener('pointermove', mudandoCoordenadas);
   },[]);

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
      <div style={{
      backgroundColor: 'red',
      width:20,
      height:20,
      borderRadius:10,
      position: 'absolute',
      transform: `translate( ${coordenadas.x}px , ${coordenadas.y}px )`,
      left: -20,
      top: -20
    }} />  
    </>
  )
}

export default App;