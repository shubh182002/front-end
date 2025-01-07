import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () =>{
    if(count<20){
      setCount(count+1)
    }else{
      setCount("You achived max value ")
    }
  }

  const removeValue = () => {
    setCount(count-1)
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <br />
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
