import React, { useState } from 'react'

export default function Test() {
let [count,setCount]=useState(0)
function increment(){
  
    setCount(count+1)
}
function decerement(){
  
  setCount(count-1)
}
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increment</button> <button onClick={decerement}>Decrement</button>
     
    </div>
  )
}

