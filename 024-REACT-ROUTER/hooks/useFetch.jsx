// 4 - custom hook

import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 refatorando o post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // 7 - tratando erros
  const [err, setErr] = useState(null);

  // 8 - desafio 6
  const [itemId, setItemId] = useState(null)

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        }
      });
      setMethod(method);
      setItemId(data)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {

        console.log(error.message)

        setErr("Houve um erro ao carregar os dados, tente novamente mais tarde! ")
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {

      let json 

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();

        setCallFetch(json);
      }else if (method === "DELETE") {
        

        const deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl, config)

        json = await res.json()
      }
      setCallFetch(json)
    };
    httpRequest();
  }, [config]);

  return { data, httpConfig, loading, err };
};
