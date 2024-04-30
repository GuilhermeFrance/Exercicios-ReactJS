import { useState } from 'react'
import './App.css'
import Fragment from './components/Fragment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fragment propFragment="teste"/>
    </>
  )
}

export default App
