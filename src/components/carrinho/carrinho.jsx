import { useEffect, useState, useContext } from "react";
import {Dock} from "react-dock";
import ProdutoCarrinho from "../produto-carrinho/produto-carrinho.jsx";
import "./carrinho.css";
import image_bac from "../../images/back.png";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/contexto-carrinho.jsx";

function Carrinho() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {carrinhoItens, totalCarrinho} = useContext(CartContext);

    useEffect(function(){
        window.addEventListener('OpenSideBar', function(){
            setShow(true);
        });
    }, []);

    function checkout(){
        navigate('/checkout')
    }

    return <Dock position="right"
                 isVisible={show}
                 fluid={false}
                 size={360}
                 onVisibleChange={ function(visible) {setShow(visible);}}>
            <div className="text-center">
                <img onClick={function(e){setShow(false);}} src={image_bac} className="cart-btn-close" />
                <h1>Meus Pedidos</h1>

            </div>

            <div className="lista-Produtos">
                {  
                    carrinhoItens.map(function(item){
                        return <ProdutoCarrinho  key={item.id}
                                                 id={item.id}
                                                 foto={item.foto}
                                                 nome={item.nome}
                                                 qtd={item.qtd}
                                                 preco={item.preco}/> 
                    })
                }
                
            </div>

            <div className="footer-cart">
                <div className="footer-cart-valor">
                    <span>Total</span>
                    <span><strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(totalCarrinho)}</strong></span>
                </div>
                <div>
                    <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
                </div>
            </div>

        </Dock>
}

export default Carrinho