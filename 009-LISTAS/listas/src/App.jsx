import { useState } from 'react'
import './App.css'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListRender/>
    </>
  )
}

export default App
