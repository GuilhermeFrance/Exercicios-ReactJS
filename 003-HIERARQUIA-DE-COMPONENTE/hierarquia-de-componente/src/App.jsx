import { useState } from 'react'
import './App.css'
import Bloco from './components/Bloco'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bloco/>
    </>
  )
}

export default App
