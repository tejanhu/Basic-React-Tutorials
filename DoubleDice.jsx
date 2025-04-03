export default function DoubleDice(){
    const m = Math.floor(Math.random() * 3) + 1;
    const n = Math.floor(Math.random() * 3) + 1;
    const isWinner = n === m;
    const styles = {color: m === n ? "green": "red"};
    // Conditionals

    return(
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner && <h3>"You Win!"</h3>}
            <p>Num 1: {m}</p>
            <p>Num 2: {n}</p>
        </div>
    );

    // return(
    //     <div className="DoubleDice" style={styles}>
    //         <h2>Double Dice</h2>
    //         {n === m && <h3>"You Win!"</h3>}
    //         <p>Num 1: {m}</p>
    //         <p>Num 2: {n}</p>
    //     </div>
    // );


    // No 1 (Best Method): 

    // return(
    //     <div>
    //         <h2 className="DoubleDice" style={{color: "yellow", fontSize:"80px"}}>Double Dice</h2>
    //         {n === m && <h3>"You Win!"</h3>}
    //         <p>Num 1: {m}</p>
    //         <p>Num 2: {n}</p>
    //     </div>
    // );

    // return(
    //     <div>
    //         <h2 className="DoubleDice" style={styles}>Double Dice</h2>
    //         {n === m && <h3>"You Win!"</h3>}
    //         <p>Num 1: {m}</p>
    //         <p>Num 2: {n}</p>
    //     </div>
    // );

    // return(
    //         <div>
    //             <h2>Double Dice</h2>
    //             {n === m ? <h3>"You Win!"</h3>: null}
    //             <p>Num 1: {m}</p>
    //             <p>Num 2: {n}</p>
    //         </div>
    // );

    // No 2 Method: Less Reptitive Method - Ternary Operator Used
    // return(
    //             <div>
    //                 <p>{msg}</p>
    //                 <p>Num 1: {m}</p>
    //                 <p>Num 2: {n}</p>
    //             </div>
    // );

    // No 3 Method: Worst method - Duplicated Method - violates DRY principle
    // if(m == n){
    //     return(
    //         <div>
    //             <p>You Win!</p>
    //             <p>Num 1: {m}</p>
    //             <p>Num 2: {n}</p>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <p>You Lose!</p>
    //             <p>Num 1: {m}</p>
    //             <p>Num 2: {n}</p>
    //         </div>
    //     )
    // }
}