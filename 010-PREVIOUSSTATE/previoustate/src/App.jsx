import { useState } from 'react'
import PreviousState from './components/PreviousState'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <PreviousState />
      
    </>
  )
}

export default App
