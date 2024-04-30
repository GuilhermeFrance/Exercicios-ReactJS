import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CarDetails brand = "Toyota" km = {20.000} color = "Preto"/>

    {/*reaproveitando*/}
    <CarDetails brand = "Ford" km = {2.000} color = "Prata"/>

    <CarDetails brand = "Honda" km = {89.000} color = "Vermelho"/>


    </>
  )
}

export default App
