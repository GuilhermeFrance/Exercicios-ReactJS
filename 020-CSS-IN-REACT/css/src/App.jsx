import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0)

  const [number, setNumber] = useState(5);
 
  const redTitle = true;
  return (
    <>
    {/*CSS Global*/}
    <h1>React com CSS</h1>
    <h2>formatado com o css global (index.css)</h2>
    {/*CSS de componente*/}
    <MyComponent/>
    {/*Inline CSS*/}
    <p style={{color: "pink", border: "2px solid aqua", padding: "25px"}}> 
      este elemento foi estilizado de forma inline
    </p>
    {/*CSS dinâmico inline*/}
    <h2 style={number < 10 ? ({color: "red"}) : ({color:"green"})}>CSS dinâmico</h2>
    <button onClick={setNumber}>Mudar valor</button>
    {/*Classes dinâmicas no CSS*/}
    <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
    {/*CSS modules*/}
    <Title/>
    </>
  )
}

export default App
