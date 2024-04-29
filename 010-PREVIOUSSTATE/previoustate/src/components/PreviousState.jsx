import { useState } from "react";

const PreviousState = () => {

  const [users, setUsers] = useState([

        {id: 1, name: "Guilherme", age:21},
        {id: 2, name: "Juan", age:36},
        {id: 3, name: "Isabele", age:18},
        {id: 4, name: "Gustavo", age:12},
        {id: 5, name: "Sara", age:52},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6);

        setUsers((prevUsers) => {
            
            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }
 
  return (
  <div>
    <h2>Lista com Objeto</h2>
    <ul>
        {users.map((user)=> (

            <li key={user.id}>{user.name} - {user.age}</li>
    ))}
    </ul>
    <button onClick={deleteRandom}>Delete random user</button>
  </div>
  )
};

export default PreviousState;
