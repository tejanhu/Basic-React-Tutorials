export default function ColorList({colors}){
  // const elements = [<p>Salaam!</p>, <p>Ahlan Wa Sahlan!</p>, <input type="password"/>];
  // return(
  //     <div> 
  //         <p>Color List</p>
  //         {elements}
  //     </div>
  //   );
  return(
      <div> 
          <p>Color List</p>
          <ul>
            {colors.map((c) => (
            <li style={{color:c}}>{c}</li>
            ))}
          </ul>
      </div>
    );
  // const lis = colors.map(color => <li style={{color}}>{color}</li>);
  // return(
  //     <div> 
  //         <p>Color List</p>
  //         <ul>{lis}</ul>
  //     </div>
  //   );
}