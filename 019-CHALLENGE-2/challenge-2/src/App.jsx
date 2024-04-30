import { useState } from 'react'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  const users = [
    {id: 1, name: "Guilherme", job:"Programmer", age: 21},
    {id: 2, name: "Gustavo", job:"Engineer", age: 20},
    {id: 3, name: "Arthur", job:"Student", age: 14}
]
  return (
    <>
         {users.map((user) => (
        
                <UserDetails key={user.id} name={user.name} job={user.job} age={user.age}/>
            
        ))}
    </>
  )
}

export default App
