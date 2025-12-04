import './App.css';
import { FormularioDeEvento } from "./components/FormularioDeEvento/FormularioDeEvento.jsx";
import { Tema } from "../src/components/Tema/Tema.jsx";
import { CardEvento } from "../src/components/CardEvento/CardEvento.jsx";
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
  const cards = [
      {
        capa:'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
        tema: temas[0],
        data: new Date(),
        titulo: 'Mulheres no Front'
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
      <section className='container-tema'>
        {temas.map(tema=>(
          <section className='section-tema' key={tema.id}>
            <Tema tema={tema} >
            </Tema>
            <div className="container-cards">
              <CardEvento evento={cards[0]}>
              </CardEvento>
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}

export default App
