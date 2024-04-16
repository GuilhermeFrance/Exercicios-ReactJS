import { useState } from 'react'
import './App.css'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Events/>
    </>
  )
}

export default App
