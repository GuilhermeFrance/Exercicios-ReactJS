import { useState } from 'react'
import './App.css'
import RenderFunciton from './components/RenderFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RenderFunciton/>
    </>
  )
}

export default App
