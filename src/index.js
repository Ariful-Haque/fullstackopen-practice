import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
 const [counter, setCounter] = useState(0) 

 // The function returns an array that contains two items.
 /*
 The counter variable is assigned the initial value of state which is zero. 
 The variable setCounter is assigned to a function that will be used to modify the state.
 */

// When the state modifying function setCounter is called, React re-renders the component
// Every time the setCounter modifies the state it causes the component to re-render.

console.log('rendering...', counter)



const handleClick = () => {
  console.log('clicked')
  
  setCounter(counter + 1)
  
}


return (
  <div>
  <div>{counter}</div>
  <button onClick={handleClick} >plus</button>
  <button onClick={() => setCounter(0)} >reset</button>
  </div>
) 
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  )

  
