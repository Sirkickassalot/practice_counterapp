import './App.css'
import { useState } from 'react'
import MyButton from './MyButton'

// want to make a COUNTER app
// 1. Make a button
// 2. detect when the button is clicked

//  state


function App () {
  const [count, setCount] = useState(29)
  // increment a state variable >>> setCount(count + 1)

  let myAge = 29
  // increment a REGULAR variable >>> myAge = myAge + 1
  return (
    <>
      <h2 style={{color: 'red'}}>{count}</h2>
      <button onClick={() => {setCount(count + 1)}}> + </button>
      <button onClick={() => {setCount(count - 1)}}> - </button>
      <MyButton/>
    </>
  )

}

// (in simplest terms) if you use a state variable instead of a regular variable; the state variable gets updated in real time.
// The empty divs are JSX Fragments
// How to make a funcitonal component
// variables
// did some JSX 
// inline styling
//JSX: We are writing HTML inside Javascript "{}"--> allows you to put javascript code inside HTML
export default App
