import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Guilherme"]);

  const [users] = useState([

        {id: 1, name: "Guilherme", age:21},
        {id: 332898, name: "Juan", age:36},
        {id: 323212, name: "Isabele", age:18},
  ])
  return (
  <div>
    <h2>Lista</h2>
    <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>

    <h2>Lista com Objeto</h2>
    <ul>
        {users.map((user)=> (

            <li key={user.id}>{user.name} - {user.age}</li>
    ))}
    </ul>
  </div>
  )
};

export default ListRender;
