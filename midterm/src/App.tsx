/* increment (by one plus number of times any btton clicked), reset (only counter, not number of times button clicked) */

import { useState, useRef } from 'react'
import './App.css'

export default function App() {

  const [buttonCounter, setButtonCounter] = useState(0)
  const [mainCounter, setMainCounter] = useState(0)
  const buttonRef = useRef(0)

  function allCounters() {
    setButtonCounter(buttonCounter + 1)
    buttonRef.current = buttonRef.current + 1
    setMainCounter(buttonRef.current + mainCounter)
  }

  function resetButton() {
    setButtonCounter(buttonCounter + 1)
    buttonRef.current = buttonRef.current + 1
    setMainCounter(0)
  }
  

  return (
    <div>
      <h1>{mainCounter}</h1>

      <button
      onClick = {allCounters}

      >Increment</button>

      <button
      onClick = {resetButton}
      >Reset</button>
      

      <h3>{buttonCounter}</h3>
    </div>
  )
}

