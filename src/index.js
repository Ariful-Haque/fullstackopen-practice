import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} and your are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const age = 10
 
  return (
    <div>
      <h1>Greetings ...</h1>
      <Hello name="Ariful Haque" age={age + 20} />
      <Hello name="Mahmudul Hasan" age={age} />
      <Hello name="Ahmedul Kabir" age={age} />
      <Hello name="Rakibul Hasan" age={age+30} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

