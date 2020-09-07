import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// --------------
// Child componets 
// ----------------

// Display component 
const Display = (props) => {
  return (
  <div>{props.counter}</div>
  )
}

// Button componet
const Button = (props) => {
  return (
  <button onClick={props.handleClick} >{props.text}</button>
  )
}

/* ----------------
// main component
------------------ */
const App = (props) => {
 const [counter, setCounter] = useState(0) 

console.log('rendering...', counter)

const increaseByOne = () => setCounter(counter + 1)
const decreaseByOne = () => setCounter(counter - 1)
const setToZero = () => setCounter(0)

return (
  <div>
  <Display counter={counter} />
  <Button handleClick={increaseByOne} text='plus'/>
  <Button handleClick={decreaseByOne} text='minus' />
  <Button handleClick={setToZero} text='reset' />
  </div>
) 
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  )

  
