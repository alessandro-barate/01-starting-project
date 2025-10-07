import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

function App() {
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
      </main>
    </div>
  );
}

export default App;
