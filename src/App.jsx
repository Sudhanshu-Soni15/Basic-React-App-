import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {/* this is a component */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title="Components" // key"title" used in props and here should be same
              description=" The core UI building block "
              Img={componentsImg}
            /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title} // key"title" used in props and here should be same
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept {...CORE_CONCEPTS[1]} />
            {/* alternate or shorter version for props but names should be same in all the files and functions   */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/* <TabButton onSelect={handleSelect}>Components</TabButton> */}
            {/* <TabButton onSelect={function (){  handleSelect("Components")}}>Components</TabButton> */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}

          {/* {!selectedTopic ? <p>Plese select a topic</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code} </code>
              </pre>
            </div>
          ) : null} */}

          {/* {!selectedTopic ? (
            <p>Plese select a topic</p>
          ) : (
            <div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code} </code>
              </pre>
            </div>
          )} */}

          {/* {!selectedTopic && <p>Plese select a topic</p> }
          {selectedTopic && (
            <div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code} </code>
              </pre>
            </div>
          ) } */}
        </section>
      </main>
    </div>
  );
}

export default App;
