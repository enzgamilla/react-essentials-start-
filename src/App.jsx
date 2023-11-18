import { coreConcept, coreJsx, coreProps, coreState } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* otherway to use props from imported files */}
            <CoreConcept
              title={coreConcept.title}
              description={coreConcept.description}
              image={coreConcept.image}
            />
            {/* shortcut to add props value from imported files */}
            <CoreConcept {...coreJsx} />
            <CoreConcept {...coreProps} />
            <CoreConcept {...coreState} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
