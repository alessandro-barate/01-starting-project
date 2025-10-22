import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {

    const [ selectedTopic, setSelectedTopic ] = useState();
            
              function handleClick(selectedButton) {
                setSelectedTopic(selectedButton);
                // selectedButton -> 'components', 'jsx', 'props', 'state'
                console.log(selectedTopic);
              }

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

    return (
        <Section title="Examples" id="examples">
          <Tabs 
            buttonsContainer="menu"
            buttons={
                <>
                    {/* First button */}
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                    {/* END first button */}
                
                    {/* Second button */}
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                    {/* END second button */}
                
                    {/* Third button */}
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                    {/* END third button */}
                            
                    {/* Fourth button */}
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
                    {/* END fourth button */}
                </>
                
          }>
            {tabContent}
          </Tabs>
        </Section>
          
        
        //   Questo è un modo di scrivere lo stesso codice di sopra usando l'operatore &&
        //   {!selectedTopic && <p>Please select a topic.</p>}
        //   {selectedTopic && <div id="tab-content">
        //     <h3>{EXAMPLES[selectedTopic].title}</h3>
        //     <p>{EXAMPLES[selectedTopic].description}</p>
        //     <pre>
        //       <code>{EXAMPLES[selectedTopic].code}</code>
        //     </pre>
        //   </div>}

        //   Questo è un modo di scrivere lo stesso codice di sopra ma più corto
        //   {!selectedTopic ? <p>Please select a topic.</p> : (<div        id="tab-content">
        //     <h3>{EXAMPLES[selectedTopic].title}</h3>
        //     <p>{EXAMPLES[selectedTopic].description}</p>
        //     <pre>
        //       <code>{EXAMPLES[selectedTopic].code}</code>
        //     </pre>
        //   </div>)}

        //   {/* Questo è un modo di scrivere lo stesso codice di sopra usando però una variabile e una condizione if

        //     {!selectedTopic ? <p>Please select a topic.</p> : null}
        //   {selectedTopic ? <div id="tab-content">
        //     <h3>{EXAMPLES[selectedTopic].title}</h3>
        //     <p>{EXAMPLES[selectedTopic].description}</p>
        //     <pre>
        //       <code>{EXAMPLES[selectedTopic].code}</code>
        //     </pre>
        //   </div> : null}

        
    );
}