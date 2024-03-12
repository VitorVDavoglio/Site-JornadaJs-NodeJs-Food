import { useEffect, useState } from "react";
import {Dock} from "react-dock";
import ProdutoCarrinho from "../produto-carrinho/produto-carrinho.jsx";
import "./carrinho.css";
import { useNavigate } from "react-router-dom";

function Carrinho() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    useEffect(function(){
        window.addEventListener('OpenSideBar', function(){
            setShow(true);
        })
    }, [show])

    function checkout(){
        navigate('/checkout')
    }

    return <Dock position="right"
                 isVisible={show}
                 fluid={false}
                 size={420}
                 onVisibleChange={ function(visible) {setShow(visible);}}>
            <div className="text-center">
                <h1>Meu Pedido</h1>
            </div>

            <div className="lista-Produtos">
                <ProdutoCarrinho/>
                <ProdutoCarrinho/>
            </div>

            <div className="footer-cart">
                <div className="footer-cart-valor">
                    <span>Total</span>
                    <span><strong>R$ 250,00</strong></span>
                </div>
                <div>
                    <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
                </div>
            </div>

        </Dock>
}

export default Carrinho