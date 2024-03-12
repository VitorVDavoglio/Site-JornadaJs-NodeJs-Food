import "./produto-vitrine.css";
import burger from "../../images/hamburguer.png"
import bag from "../../images/bag-black.png"

function ProdutoVitrine(){
    return <div className="produto-box text-center">
        <img src={burger} alt="Foto"/>

        <div>
            <h2>Spicy Burguer</h2>
            <p className="prod-vitrine-descricao">Hamburguer de 250g, queijo, tomate, alface e cebola</p>
            <p className="prod-vitrine-valor">R$ 18,90</p>
        </div>

        <div>
            <button className="btn-cart">
                <img src={bag} className="icon"/>
                Adicionar
            </button>
        </div>

    </div>
}

export default ProdutoVitrine;