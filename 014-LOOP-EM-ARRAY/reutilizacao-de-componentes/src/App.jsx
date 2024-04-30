import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Vermelho" },
    { id: 2, brand: "KIA", km: 9210, color: "Azul" },
    { id: 3, brand: "Renault", km: 552, color: "Verde" },
  ];
  return (
    <>
      {/*loop em array*/}
      <h2 id="loop">Feito com loop em array:</h2>

      {cars.map((car) => (
        <p>
          <CarDetails brand={car.brand} km={car.km} color={car.color} />
        </p>
      ))}
    </>
  );
}

export default App;
