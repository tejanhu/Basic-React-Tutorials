export default function DoubleDice(){
    const m = Math.floor(Math.random() * 3) + 1;
    const n = Math.floor(Math.random() * 3) + 1;
    // Conditionals

    // No 1 (Best Method): 
    return(
            <div>
                <p>{m === n ? "You Win!" : "You Lose!"}</p>
                <p>Num 1: {m}</p>
                <p>Num 2: {n}</p>
            </div>
    );
    
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