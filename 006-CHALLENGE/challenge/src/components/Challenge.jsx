const Challenge = () => {
  

  const n1 = 1;

  const n2 = 4;

  const soma = n1 + n2;

  return (
    <div>
      <p>
        {" "}
        {n1}+{n2}
      </p>
      <div>
        <button onClick={() => console.log({ soma })}>
          Clique aqui para imprimir esta soma no console
        </button>
      </div>
    </div>
  );
  
};

export default Challenge;
