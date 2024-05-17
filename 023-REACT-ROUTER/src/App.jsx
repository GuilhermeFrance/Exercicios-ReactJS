import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import NavBar from './components/NavBar'

//routes
import Home from './routes/Home'
import About from './routes/About'
import Products from './routes/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            {/* 4 - rota dinâmica */}
            <Route path='/products/:id' element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
