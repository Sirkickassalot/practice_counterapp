import './App.css'
import { useState, useEffect } from 'react'
import MyButton from './components/MyButton'
import ProfileCard from './components/ProfileCard'
import profiles from './fakeData'

// want to make a COUNTER app
// 1. Make a button
// 2. detect when the button is clicked
//  state
//API 

function App () {
  const [count, setCount] = useState(29)
  // increment a state variable >>> setCount(count + 1)

  let myAge = 29
  // increment a REGULAR variable >>> myAge = myAge + 1
  const [fullname, setFullname] = useState('WAITING FOR DATA')


// async await (axios)

const getRandomName = async () => {
  const response = await fetch('https://randomuser.me/api')
  const data = await response.json()
  setFullname(data.results[0].name.first + ' ' + data.results[0].name.last)

  return data.results[0].picture.large
}

useEffect(() => {
  getRandomName()
}, [])

  return (
    <>
      <h2 style={{color: 'red'}}>{count}</h2>
      <button onClick={() => {setCount(count + 1)}}> + </button>
      <button onClick={() => {setCount(count - 1)}}> - </button>
      <MyButton title='BUY' color='red'/>
      <MyButton title='SELL' color='green'/>
      {profiles.map(profile => (
        <ProfileCard 
          image={`https://robohash.org/${Math.random()}.png`}
          title={profile.title}
          name={fullname}
          description={profile.description}
        />
      ))}

    </>
  )

}
// console.log(math.random)
// the 'title' and 'color' in the component on lines 23 and 24 are props
// learned how to create your own component
// (in simplest terms) if you use a state variable instead of a regular variable; the state variable gets updated in real time.
// The empty divs are JSX Fragments
// How to make a funcitonal component
// variables
// did some JSX 
// inline styling
//JSX: We are writing HTML inside Javascript "{}"--> allows you to put javascript code inside HTML
export default App
