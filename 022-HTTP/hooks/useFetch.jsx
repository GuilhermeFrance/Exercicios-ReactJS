import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - adiconando o POST ao hook

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - criando controle de tela de loading

  const [loading, setLoading] = useState(false)

  // 7 - trabalhando com possibilidade de erro usando TRY CATCH

  const [err, setErr] = useState(false)

  // 8 - desafio 6
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
    const fetchData = async () => {

    setLoading(true)
    
      try {  
          const res = await fetch(url);
          const data = await res.json();
          setData(data);
          setLoading(false)
      }

     catch (error) {
      console.log(error)
      setErr(true)
    }
  }
    fetchData()
    setLoading(false)
    
  }, [url, callFetch]);

  // POST

  useEffect(() => {
    
    setLoading(true)

    const httpRequest = async () => {
      let json

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        json = await res.json();

        

        setLoading(false)
      } else if(method === "DELETE") {

        const deleteUrl = `${url}/${itemId}`

        const res = await fetch(deleteUrl)
        json = await res.json()

      }
      setCallFetch(json);
    };
    httpRequest();

    
  
  }, [config, url, method]);


  return { data, httpConfig , loading, err, url };
};
