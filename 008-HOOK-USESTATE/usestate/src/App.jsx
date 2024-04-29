import { useState } from 'react'

import './App.css'
import ManageData from './components/ManageData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ManageData/>
    </>
  )
}

export default App
