import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/* Questa scrittura sopra sostituisce quella sotto, perchè così facendo gli elementi di CORE_CONCEPTS vengono generati dinamicamente. Sotto, invece, se per caso un elemento di CORE_CONCEPTS fosse commentato, in pagina avremmo uno spazio vuoto visibile */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title} // Posso fare anche così, quando le props non sono in un file separato -> title="Components" e image={componentsImg}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* Il metodo con lo spread operator (...) è decisamente più veloce. Lo
            spread in pratica legge estrapola tutte le coppie chiave-valore dell'oggetto indicato */}
          </ul>
        </section>
    );
}
