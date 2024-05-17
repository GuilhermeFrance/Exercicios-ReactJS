import { useEffect, useState } from "react";
import "./App.css";

// 4 - custom hook
import { useFetch } from "../hooks/useFetch";

function App() {
  const [count, setCount] = useState(0);
  const url = "http://localhost:3000/products";

  // 4 - custom hook
  const { data: items, httpConfig, loading, err } = useFetch(url);

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2 - add produtos
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //     const res = await fetch(url, {
    //     method: "POST",
    //      headers: {
    //        "Content-type":"application/json"
    //      },
    //      body: JSON.stringify(product)
    //    })

    // 3 - carregamento de dados dinâmicos
    //  const addedProducts = await res.json()
    //  setProducts((prevProducts) => [...prevProducts, addedProducts])

    // 5 - carregamento dinâmico

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 8 - desafio 6

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <>
      <div className="App">
        <h1>Produtos</h1>
        {loading && <p>Carregando dados...</p>}
        {err && <p>{err}</p>}
        {!err && (
          <ul>
            {items &&
              items.map((product) => (
                <li key={product.id}>
                  {product.name} - R$: {product.price}
                <button className="trash-btn" onClick={() => handleRemove(product.id) }>X</button>
                </li>
              ))}
          </ul>
        )}

        <div className="add-products" onSubmit={handleSubmit}>
          <form>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Preço
              <input
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/* 7 - loading no post */}
            {loading && <input type="submit" value="Aguarde" disabled />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
