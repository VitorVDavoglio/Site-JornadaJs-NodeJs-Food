import "./produto-carrinho.css";
import foto from "../../images/hamburguer.png";

function ProdutoCarrinho() {
    return <div className="produto-cart-box">
        <img src={foto} alt="Foto"/>

        <div>
            <p className="produto-cart-nome">Spicy Burguer</p>
            <p className="produto-cart-valor">R$ 23,50</p>

            <div className="footer-produto-cart">
                <div>
                    <button className="btn">-</button>
                    <span className="footer-produto-qtd">02</span>
                    <button className="btn">+</button>
                </div>

                <p className="footer-produto-preco text-right">R$ 47,00</p>
            </div>
        </div>
    </div>
}

export default ProdutoCarrinho;