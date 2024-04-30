import { useState } from 'react'

import './App.css'
import ChildrenPropContainer from './components/ChildrenPropContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ChildrenPropContainer myValue="testing">
      <p>este é o conteúdo do container</p>
     </ChildrenPropContainer>
    </>
  )
}

export default App
