import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
  const Increament = () => {
    if(counter>=20){
      pass;
    }
    setcounter(counter+1)
  };
  const Decreament = () => {
    if(counter<=0){
      pass;
    }
    setcounter(counter-1)
  };
  return (
    <>
    <h1>checked the counter :{counter}</h1>
    <button onClick={Increament}>increament</button> 
    <button onClick={Decreament}>Decrement</button>
    </>

  )
}

export default App
