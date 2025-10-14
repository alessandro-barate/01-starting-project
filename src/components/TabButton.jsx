export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
      {/* React passa automaticamente la props .children ad ogni componente custom.props.children fa si che il componente possa ricevere il valore dato al tag html voluto all'interno del suo tag di apertura e di chiusura */}
    </li>
  );
}

// Altro modo di scrivere il codice sopra, usando la destrutturazione
// export default function TabButton({children}) {
//   return (
//     <li>
//       <button>{children}</button>
//     </li>
//   );
// }
