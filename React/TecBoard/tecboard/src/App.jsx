import './App.css';
import { FormularioDeEvento } from "./components/FormularioDeEvento/FormularioDeEvento.jsx";
import { Tema } from "./components/Tema/Tema.jsx";
function App() {
  const temas = [
    {
      nome: 'front-end',
      id: '1'
    },
    {
      nome: 'back-end',
      id: '2'
    },
    {
      nome: 'devops',
      id: '3'
    },
    {
      nome: 'data science',
      id: '4'
    },
    {
      nome: 'inteligencia artificial',
      id: '5'
    },
    {
      nome: 'cloud' ,
      id: '6'
    }
  ]
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section className='section-banner'>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
      <section>
        {temas.map(tema=>(
          <div className='section-tema'>
            {tema.nome}
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
