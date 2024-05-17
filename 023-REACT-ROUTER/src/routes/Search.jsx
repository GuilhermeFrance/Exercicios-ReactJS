import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../components/Loading";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, err } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      {err && <p>Erro ao buscar</p>}
      {loading && <Loading/>}
      {!loading && (
        <ul className="products">
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>R$: {item.price}</p>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
