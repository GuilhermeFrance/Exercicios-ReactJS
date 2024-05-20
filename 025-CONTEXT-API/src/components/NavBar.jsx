import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/messages'>Mensagens</NavLink>
 </nav>
  )
}

export default NavBar