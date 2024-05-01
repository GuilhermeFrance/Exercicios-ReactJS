import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>Forms</h2>
     
     <MyForm user = {{ 

      name: "Josias",                
      email: "josias@gmail.com",                     
      bio: "Sou um advogado",
      role: "admin"
    }}/>

    </>
  )
}

export default App
