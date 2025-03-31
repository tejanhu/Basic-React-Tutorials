import './App.css'
import ShoppingList from './ShoppingList';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';

// const data = [
//   {
//     id: 1, item: 'dates', quantity: 20, completed: false
//   },
//   {
//     id: 2, item: 'cheese', quantity: 4, completed: true
//   },
//   {
//     id: 3, item: 'milk', quantity: 2, completed: false
//   },
//   {
//     id: 4, item: 'butter', quantity: 5, completed: true
//   }
// ];

function App() {
  return (

    <div> 

      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>

      {/* <Greeter person="Hernandez" from="Martinez"/> 
      <Greeter person="Fernandez" from="Martinez"/> 
      <Greeter person="Gomez" from="Estrada"/> 
      <Greeter person="Sanchez"/> 
      <Greeter from="Teixera"/> 
      <Greeter/> 
      <Die/>
      <Die numSides={10}/>
      <Die numSides={20}/> */}
      {/* <ListPicker values={["dates", "cakes", "sweets", "milk"]}/>
      <ListPicker values ={[100, 200, 300]}/> */}
      {/* <ListPicker values = {{country: "Egypt", continent: "Africa", religion:["Islam", "Christianity"]}}/>
      <ListPicker values = {{country: "The Gambia", continent: "Africa", religion:["Islam", "Christianity"]}}/>
      <ListPicker values = {{country: "DR Congo", continent: "Africa", religion:["Islam", "Christianity"]}}/> */}
      </div>
    // <div>
    //     <ShoppingList items={data}/>
    // </div>
  )
}

export default App
