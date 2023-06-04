import './NavBar.css'
import CartWidget from './CartWidget.js';
import logo from '../IMG/Z-LOGO.png'

const NavBar = () => {
    return (
        <nav>      
        <div className='logo'>
            <img src={logo} alt="Logo de la marca"/>
        </div>
           <ul class="nav-links">
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Contacto</a></li>
           </ul>            

        <CartWidget>

            </CartWidget>
        </nav>
    );
}

export default NavBar;