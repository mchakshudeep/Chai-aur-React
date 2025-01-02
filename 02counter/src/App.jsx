import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import './App.css'



function App() {

  let [counter,setCounter]=useState(0);

  // let counter=0;
  
  const addValue=()=>{
    // console.log("clicked",counter);
    // counter=counter+1;
    setCounter(counter==20?20:counter+1);
  }

  const decreaseValue=()=>{
    setCounter(counter==0?0:counter-1);
  }
  
  return (
    <>
      <img src={viteLogo} />
      <h1> Chai aur React</h1>
      <h2>counter Value : {counter}</h2>

      <button onClick={addValue}
      >add value</button>
      <br/><br/>
      <button
      onClick={decreaseValue}
      >decrease value</button>
    </>
  )
}

export default App
