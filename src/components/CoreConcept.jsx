import "./CoreConcept.css";

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
const CoreConcept = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
