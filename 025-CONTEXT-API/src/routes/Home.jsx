// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter";

// 4 - context hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTItleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext)

  const { counter } = useCounterContext();

  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }


  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>O valor do contador é: {counter}</p>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("YELLOW")}>Amarelo</button>
      </div>
    </div>
  );
};

export default Home;
