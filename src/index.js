

// Function that returns a function  

import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [value, setValue] = useState(10)

  const Hello = (who) => () => 
    console.log('Hello', who)

  /*
  The hello function that creates the event handlers can 
  be thought of as a factory that produces customized event handlers meant for greeting users.
  */

  return (
    <div>
      {value}
      <button onClick={Hello("Arif")} >Click-me</button>
      <button onClick={Hello("Sakib")} >Click-me</button>
      <button onClick={Hello("Rihan")} >Click-me</button>
      <button onClick={Hello("Babor")} >Click-me</button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)