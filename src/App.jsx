import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  

  function onCount(){
    setCount((count) => count + 1);
  } 

  return (
    <div className="App">
       <button className='bg-black text-white p-4' 
        onClick={onCount}>
          count is {count}
        </button> 
        <div className="square_green" />
        <div className="square_red" />  
    </div>
  )
}

export default App
