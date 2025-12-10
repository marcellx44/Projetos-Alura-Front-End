import './App.css'
import Heading from '../components/Heading/Heading.jsx';
import Section from '../components/Section/Section.jsx';

function App() {

  return (
    <>
      {/* <Section>
        <Heading level={4}>Sub-sub-heading</Heading>
        <Heading level={4}>Sub-sub-heading</Heading>
        <Heading level={4}>Sub-sub-heading</Heading>
      </Section> */}

      <Section level={3}>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
      </Section>
      <Section level={2}>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
        <Heading>Sub-sub-heading</Heading>
      </Section>
    </>
  )
}

export default App
