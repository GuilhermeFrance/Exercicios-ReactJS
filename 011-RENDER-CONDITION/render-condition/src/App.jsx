import { useState } from 'react'
import './App.css'

import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ConditionalRender/>
    </>
  )
}

export default App
