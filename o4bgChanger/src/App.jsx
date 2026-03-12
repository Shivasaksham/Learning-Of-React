import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{background:color}}>
    </div>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl '>
        <button onClick={() => setcolor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{background:"red"}}
        >RED
        </button>

        <button onClick={() => setcolor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{background:"green"}}
        >GREEN
        </button>

        <button onClick={() => setcolor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{background:"blue"}}
        >BLUE
        </button>
        <button onClick={() => setcolor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{background:"yellow"}}
        >YELLOW
        </button>
        <button onClick={() => setcolor("black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{background:"black"}}
        >BLACK
        </button>
      </div>
    </div>
    </>
  )
}

export default App
