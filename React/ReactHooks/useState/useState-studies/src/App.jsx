import { useState } from 'react'
import './App.css'

function Contador(){
  const [count, funcao_atualizar]= useState(0);
  function Click(){
    funcao_atualizar(count + 1);
  }
  return(
    <>
      <h1>useState()</h1>
      <button onClick={Click}>count is {count}</button>
    </>
  )
}

function App() {
  return(
    <Contador></Contador>
  )
}

export default App
