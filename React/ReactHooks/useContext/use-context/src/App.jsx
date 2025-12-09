import { useContext } from 'react'
import './App.css'
import { LevelContext } from "../context/LevelContext.jsx";
import Heading from '../components/Section/Section.jsx';
import Section from '../components/Heading/Heading.jsx';

function App() {

  return (
    <>
      <Section>
        <Heading level={4}>Sub-sub-heading</Heading>
        <Heading level={4}>Sub-sub-heading</Heading>
        <Heading level={4}>Sub-sub-heading</Heading>
      </Section>

      <Section level={4}>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
      </Section>
    </>
  )
}

export default App
