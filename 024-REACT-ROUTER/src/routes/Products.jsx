import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link  } from "react-router-dom";
// 4 - rota dinâmica

const Products = () => {
  const { id } = useParams();

  // 5 - carregamento dinâmico
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, err } = useFetch(url);
  return (
    <>
      <p>ID do produto: {id}</p>
      {err && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
        <h1> {product.name}</h1>
        <h2>R$: {product.price}</h2>
        <Link to={`/products/${id}/info`}>Mais informações</Link>
      </div>
      )}
      
    </>
  );
};

export default Products;
