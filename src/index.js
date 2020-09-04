import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
 const [counter, setCounter] = useState(0) 

 // The function returns an array that contains two items.
 /*
 The counter variable is assigned the initial value of state which is zero. 
 The variable setCounter is assigned to a function that will be used to modify the state.
 */
 setTimeout(
  () => setCounter(counter + 1),
  1000
)

console.log('rendering...', counter)
return (
  <div>{counter}</div>
)
// When the state modifying function setCounter is called, React re-renders the component
// Every time the setCounter modifies the state it causes the component to re-render. 
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  )

  
