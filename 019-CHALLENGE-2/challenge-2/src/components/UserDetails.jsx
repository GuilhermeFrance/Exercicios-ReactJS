import React from 'react'

const UserDetails = ({name, job, age}) => {

  return (
    <div>
        <h3>{name}</h3>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (<p>Pode tirar a carteira de habilitação!</p>) : (<p>Não pode tirar a carteira de habilitação, menor de idade! :(</p>)}
    </div>
  )
}

export default UserDetails