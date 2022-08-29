import logo from '../../logo.svg';
import './style.css';

const NavBar = () => { 
    return (
        <div className='navbar-container'> 
            <div>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Catálogo</a></li>
                    <li><a href='#'>Sobre nosotros</a></li>
                </ul>
            </div>
            <div>
                <button> Login </button>
            </div>
        </div>
    )
}

export default NavBar;