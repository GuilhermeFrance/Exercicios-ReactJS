import {Link} from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

import './Home.css'

const Home = () => {

// 3 - carregamento de dados

const url = "http://localhost:3000/products"

const { data, products, loading, err } = useFetch(url);

  return (
    <div>
       <h1>Produtos</h1>
        <ul className='products'>
          <li>
            <h2>teste 1</h2>
          </li>
          <li>
            <h2>teste 2</h2>
          </li>
          <li>
            <h2>teste 3</h2>
          </li>
       </ul>
    </div>
  )
}

export default Home;