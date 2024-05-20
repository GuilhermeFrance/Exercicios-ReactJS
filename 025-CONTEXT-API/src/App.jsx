import { useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Router,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import About from "./routes/About";
import Messages from "./routes/Messages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        
        <BrowserRouter>
          <NavBar />
          <h1>Context</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
