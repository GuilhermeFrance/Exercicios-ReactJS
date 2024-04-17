import React from 'react'

const valid = x =>{
  if(x) return <h1>Retorno verdadeiro</h1>
  else return <h1>Retorno falso</h1>
}

const RenderFunciton = () => {
  
  return(
    <>
    <div id='div'>
    {valid(true)}
    {valid(false)}
    </div>
    </>
  )

}

export default RenderFunciton;