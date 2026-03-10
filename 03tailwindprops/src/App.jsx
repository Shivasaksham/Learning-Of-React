import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'


function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>tailwind test</h1>
     <Card username="hello there !!" />
     <br />
     <Card username="hello there !!!" />

    
    </>
  )
}

export default App
