import './App.css'

// want to make a COUNTER app
// 1. Make a button
// 2. detect when the button is clicked


function App () {
  let myAge = 20
  return (
    <>
      <h2 style={{color: 'red'}}>My Name is Isaac, I am {myAge} years old.</h2>
      <button onClick={() => {
        myAge = myAge + 1
        alert(myAge)
      }}> + </button>
      <button onClick={() => alert('you clicked the - button')}> - </button>
    </>
  )

}

// The empty divs are JSX Fragments
// How to make a funcitonal component
// variables
// did some JSX 
// inline styling
//JSX: We are writing HTML inside Javascript "{}"--> allows you to put javascript code inside HTML
export default App
