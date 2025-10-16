import { useState } from "react";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    // selectedButton -> 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title} // Posso fare anche così, quando le props non sono in un file separato -> title="Components" e image={componentsImg}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            {/* Il metodo con lo spread operator (...) è decisamente più veloce. Lo
            spread in pratica legge estrapola tutte le coppie chiave-valore dell'oggetto indicato */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() => handleClick('state')}>State</TabButton>
            {/* La arrow function serve per poter chiamare una funzione che deve passare alcuni argomenti. */}
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
