import { useState } from 'react'
import './App.css'

function Contador(){
  let count =0;
  function Click(){
    count++;
    console.log(count);
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
