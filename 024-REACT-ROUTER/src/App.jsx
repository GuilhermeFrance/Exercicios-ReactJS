import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// components
import NavBar from './components/NavBar'

//routes
import Home from './routes/Home'
import About from './routes/About'
import Products from './routes/Products'
import Info from './routes/Info'
import NotFound from './routes/NotFound'
import SearchForm from './components/SearchForm'
import Search from './routes/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        <NavBar />
        <SearchForm/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            {/* 4 - rota dinâmica */}
            <Route path='/products/:id' element={<Products />} />
            {/* 6 - nested routes */}
            <Route path='/products/:id/info' element={<Info/>} />
            {/* 9 - search */}
            <Route path='/search' element={<Search/>}/>
            {/* 10 - redirect */}
            <Route path='/company' element={<Navigate to='/about'/>}/>
            {/* 7 - not found route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
