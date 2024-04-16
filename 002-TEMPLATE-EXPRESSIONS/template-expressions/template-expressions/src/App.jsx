import { useState } from 'react'
import './App.css'
import TemplateExpressions from './components/TemplateExpression'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TemplateExpressions/>
    </>
  )
}

export default App
