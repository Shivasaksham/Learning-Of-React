import { useState,useCallback ,useEffect,useRef} from 'react'
import "tailwindcss";
function App() {
  const [length,setlength]= useState(8)
  const [numberallowed,senumberAllowed]= useState(false)
  const [charAllowed,setcharAllowed]= useState(false)
  const [password,setpassword]=useState("")

  // useRef hook
  const passwordRef =useRef(null)
  const onclicktocopy=useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator =useCallback( () => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()+_{}"
    for (let i = 1; i < length; i++) {
     let char =Math.floor(Math.random() * str.length +1)
     pass+=str.charAt(char)      
    }
    setpassword(pass)


  },[charAllowed,numberallowed,length,setpassword])

  useEffect( () => {
    passwordGenerator();
  },
  [length,numberallowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password Generator</h1>  
      <div className='clasName="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input type="text"
        value={password}
        className='outline-none w-fll py-1 px-3'
        placeholder='password'
        readOnly
        
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' ref={passwordRef} 
        onClick={onclicktocopy}>copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flwx items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          /><label>length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           defaultChecked={numberallowed}
           id="numberInput" 
          onChange={() =>{senumberAllowed((prev)=> !prev);
          }}
          />
          <label htmlFor='NumberInput'>Numbers</label>
        </div>

         <div className='flex items-center gap-x-1'>
          <input type="checkbox"
           defaultChecked={charAllowed}
           id="numberInput" 
          onChange={() =>{setcharAllowed((prev)=> !prev);
          }}
          />
          <label htmlFor='NumberInput'>Character</label>
        </div>


      </div>
    </div>
  
    </>
  )
}

export default App
