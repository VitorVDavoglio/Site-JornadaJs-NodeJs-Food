import "./navbar.css"
import Cart from "../carrinho/carrinho.jsx"
import logo from "../../images/logo.png"
import bag from "../../images/bag.png"
import {Link} from "react-router-dom"

function Navbar(props){

    function openSiderBar(){
        const event = new CustomEvent('OpenSideBar');
        window.dispatchEvent(event);
    }

    return <div className="navBar">
        
        <Link to="/">
            <img src={logo} className="logotipo" alt="Imagem Logotipo" />
        </Link>
        
        {
            props.showMenu &&
                <div className="menu">
                <Link to="/historico">Histórico</Link>
                <button onClick={openSiderBar} className="btn btn-red">
                    <img src={bag} className="icon"/>
                    Sacola
                </button>
            </div>
        }

        

        <Cart/>
    </div>
}

export default Navbar;