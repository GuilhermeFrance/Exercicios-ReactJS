import React from "react";
import Loading from "./Loading";
import {ShoppingCart, Trash} from 'lucide-react';
import { useState, useEffect } from "react";


const Products = ({ products, loading, err, url}) => {

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod("POST");
    } else if(method === "DELETE") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
      setItemId(data);
    }
  };
  useEffect(() => {
    
   

    const httpRequest = async () => {
      let json

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();
 

    
      } else if(method === "DELETE") {

        const deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl)
        json = await res.json()

      }
      setCallFetch(json);
    };
    httpRequest();
    
  
  }, [config, url, method]);

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (  
    <div className="products">
      {err ? (
        <p>Erro ao carregar os dados! Verifique sua internet ou tente mais tarde.</p>
      ) : 
      loading ? (
          <Loading />
        ) : (
          products &&
            products.map((product) => (
              <div key={product.id} className="product">
              
                <div className="image">
                  <img src={product.img} alt={product.name} srcSet={product.img} />
                </div>
                <p className="description">{product.name}</p>

              <div className="options">
                <span className="cart" onClick={() => handleRemove(product.id)}>
                <Trash color="white"/>
                </span>
                <span className="price">
                  R${" "}
                  {product.price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                  })}
                </span>
                </div>
              </div>
           ))
        )   }
    </div>
  );
};

export default Products;
