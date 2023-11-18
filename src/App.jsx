import { CORE_CONCEPTS } from "./js/data.js";
import { selectTab } from "./js/tabFunction.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import TabContent from "./components/TabContent/TabContent.jsx";
import { useEffect, useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept key={data.id} {...data} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            {CORE_CONCEPTS.map((data) => (
              <TabButton
                key={data.id}
                onSelect={() => {
                  selectTab(data.title);
                  setSelectedTab(data);
                }}
              >
                {data.title}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            {selectedTab ? (
              <TabContent {...selectedTab} />
            ) : (
              <p>Please select a topic...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
