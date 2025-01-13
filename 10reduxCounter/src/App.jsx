
import React, { useState } from 'react'
import './App.css'
import { increment, decrement, reset,addAmountAsNumber } from './features/couter/coutSlice'
import { useSelector, useDispatch } from 'react-redux'





function App() {

  const [number,setNumber] = useState(0)

  const dispathch = useDispatch()

 const count = useSelector((state) => state.counter.value)
  
const handleIncrement = () => {
    dispathch(increment())
} 
const handleDecrement = () => {
   dispathch(decrement())
}
const handleResettBtn = () => {
  dispathch(reset())
}
const handleIncAmount = () => {
  dispathch(addAmountAsNumber(number))
}


  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h3>Count : { count}</h3>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleResettBtn} >Reset</button>
      <br />
      <br />
      <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}  placeholder='Enter Amount'  />
      <br /><br />
      <button onClick={handleIncAmount}>Inc By Amount</button>
    </div>
  )
}

export default App
