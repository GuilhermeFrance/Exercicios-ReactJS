import { useState } from "react";
import reactLogo from "./assets/react.svg";
import reactLogoBlack from "/react-dark.webp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="div-img-public">
          <p>
            {" "}
            Essa imagem é pública e pode ser importada apenas com
            /react-dark.webp:
          </p>
          <img id="react-black" src={reactLogoBlack} alt="" />
        </div>
        <div id="div-img-assets">
          <p>
            {" "}
            Essa imagem é utilizada na pasta assets e para importada ao é
            necessário "./assets/...":
          </p>
          <img id="react-logo" src={reactLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
