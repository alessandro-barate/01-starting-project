import { useState } from "react";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

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
          {!selectedTopic ? <p>Please select a topic.</p> : null}
          {selectedTopic ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> : null}

          {/* Questo è un modo di scrivere lo stesso codice di sopra usando l'operatore &&
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>} */}

          {/* Questo è un modo di scrivere lo stesso codice di sopra ma più corto
          {!selectedTopic ? <p>Please select a topic.</p> : (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>)} */}

          {/* Questo è un modo di scrivere lo stesso codice di sopra usando però una variabile e una condizione if
          let tabContent = <p>Please select a topic.</p>;
          if (selectedTopic) {
            tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          )}

          return...
          
          ...</menu>
          {tabContent}
          </section>... */}

        </section>
      </main>
    </div>
  );
}

export default App;
