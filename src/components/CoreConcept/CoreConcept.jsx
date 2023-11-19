import "../CoreConcept/CoreConcept.css";

import { CORE_CONCEPTS } from "../../js/data.js";

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
const ListConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data) => (
          <ListConcept key={data.id} {...data} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcept;
