import reactImg from "./assets/react-core-concepts.png";
import { coreConcept, coreJsx, coreProps, coreState } from "./data.js";

const reactDescription = ["Fundamental", "Core", "Crucial"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    reactDescription[getRandomInt(reactDescription.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
//props example
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
//same as code comment in upper part the parameter with {obj/data should be same as the name in js imported files}
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
