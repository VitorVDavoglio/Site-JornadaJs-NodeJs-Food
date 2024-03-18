import "./produto-vitrine.css";
import bag from "../../images/bag-black.png";
import { CartContext } from "../contexts/contexto-carrinho";
import { useContext } from "react";

function ProdutoVitrine(props){

    const {AddItemCarrinho} = useContext(CartContext);

    function AddItem(){
        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            qtd: 1
        }

        AddItemCarrinho(item);
    }    

    return <div className="produto-box text-center">
        <img src={props.foto} alt="Foto"/>

        <div>
            <h2>{props.nome}</h2>
            <p className="prod-vitrine-descricao">{props.descricao}</p>
            <p className="prod-vitrine-valor">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(props.preco)}</p>
        </div>

        <div>
            <button onClick={AddItem} className="btn-cart">
                <img src={bag} className="icon"/>
                Adicionar
            </button>
        </div>

    </div>
}

export default ProdutoVitrine;