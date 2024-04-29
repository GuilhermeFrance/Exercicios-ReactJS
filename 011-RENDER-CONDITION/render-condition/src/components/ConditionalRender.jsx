import { useState } from "react"

const ConditionalRender = () => {
const [x] = useState(true);
const [name, setName] = useState("João");


  return (
    <div>
      <h1> Isso será exibido? </h1>
      {x && <p> se x for true, sim!</p>}
      <h2>Seu nome é João?</h2>
      <p>nome: {name}</p>
      {name === "João" ? (

      
      <div>
        
        <p>Meu nome é João </p>
      </div>
      )
      : (
        <div>
        <p>Meu nome não é João</p>
      </div>
      )}
      <button onClick={() => setName("Matheus")}>Mudar nome</button>

    </div>
  )
}

export default ConditionalRender
