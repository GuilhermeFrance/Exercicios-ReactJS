import { useState } from 'react'
import './App.css'
import ExecuteFunction from './components/ExecuteFunction'

function App() {
  const [count, setCount] = useState(0)

  function showMessage() {
    console.log("Evento do componente pai!")
  }
  return (
    <>
  <ExecuteFunction myFunction={showMessage}/>
  <p>(Olhe o console)</p>
    </>
  )
}

export default App
