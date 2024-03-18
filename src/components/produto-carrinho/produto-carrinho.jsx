import "./produto-carrinho.css";
import { CartContext } from "../contexts/contexto-carrinho";
import { useContext } from "react";

function ProdutoCarrinho(props) {

    const {AddItemCarrinho, RemoveItemCarrinho} = useContext(CartContext);

    function AddItem(){
        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            qtd: 1
        }
        AddItemCarrinho(item);
        new
    }
    
    function RemoveItem(){
        RemoveItemCarrinho(props.id);
    }

    return <div className="produto-cart-box">
        <img src={props.foto} alt="Foto"/>

        <div>
            <p className="produto-cart-nome">{props.nome}</p>
            <p className="produto-cart-valor">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(props.preco)}</p>

            <div className="footer-produto-cart">
                <div>
                    <button onClick={RemoveItem}className="btn">-</button>
                    <span className="footer-produto-qtd">{props.qtd}</span>
                    <button onClick={AddItem} className="btn">+</button>
                </div>

                <p className="footer-produto-preco text-right">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(props.preco * props.qtd)}</p>
            </div>
        </div>
    </div>
}

export default ProdutoCarrinho;