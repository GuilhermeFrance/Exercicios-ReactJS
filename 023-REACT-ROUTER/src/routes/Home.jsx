import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../components/Loading";

import "./Home.css";

const Home = () => {
  // 3 - carregamento de dados

  const url = "http://localhost:3000/products";

  const { data: items, loading, err } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>

      {err && (
        <p>Não foi possível carregar os dados, tente novamente mais tarde!</p>
      )}
      {loading && <Loading/>}
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
