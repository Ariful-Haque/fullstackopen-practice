import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({buttonHandler, text}) => {
  return (
    <button onClick={buttonHandler} >{text}</button>
  )
}


const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0) 
  const [allClicks, setAllClicks] = useState([]) 


  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1) 
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1) 
  }
  
  return (
    <div>
      <div>
        <Button buttonHandler={handleLeftClick} text='left-button' />
        <Button buttonHandler={handleRightClick} text='right-button' />
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  )

  
