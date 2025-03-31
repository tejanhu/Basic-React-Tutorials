// export default function ListPicker({values}){
//     const randomIndex = Math.floor(Math.random() * values.length);
//     const randomElement = values[randomIndex];
//     return (
//         <div>
//             <p>
//                 The list of values: {values}
//             </p>
//             <p>
//                 Random Element: {randomElement}
//             </p>
//         </div>
//     )
// }

export default function Listpicker({ values}) {
    return (
      <p>
        {Array.isArray(values) ? values.join(', ') : JSON.stringify(values)} 
      </p>
    );
  }