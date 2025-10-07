import "./styles/CoreConcept.css";

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
// Questo sopra si può scrivere nel modo qui sotto:

export default function CoreConcept({ image, description, title }) {
  // Le parentesi graffe all'interno dell'area dei parametri, destrutturano l'oggetto props, dando accesso direttamente alla coppia chiave-valore
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
