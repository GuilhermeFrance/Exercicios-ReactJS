import { useState } from 'react'
import './App.css'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)
  const name = "Marcos"
  const [userName] = useState("Maria")
  return (
    <>
  <h2>Feito usando props</h2>  
  <ShowUserName name = "Guilherme" />
    <h2>Feito usando uma "const name ="</h2>
  <ShowUserName name={name}/>
    <h2>Feito usando useState</h2>
  <ShowUserName name={userName}/>
<br/>
  {/*destructuring*/}

  <CarDetails brand = "Toyota" km = {20.000} color = "Preto"/>


    </>
  )
}

export default App
