import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){

    const [carrinhoItens, setCarrinhoItens] = useState([]);
    const [totalCarrinho, setTotalCarrinho] = useState(0);

    //Adicionando o Item ao Carrinho
    function AddItemCarrinho(item){

        let cartItensNovo = [];
        let findItem = false;

        //Verificar se o item já existe no carrinho...
        for( var prod of carrinhoItens){
            
            //Encontrou o item no carrinho
            if (prod.id == item.id){
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItensNovo.push(item);
            } else {
                cartItensNovo.push(prod);
            }
        }

        // Se nao encontrou o item ou é o primeiro item a ser inserido...
        if((findItem == false) || (carrinhoItens.length == 0)) {
            cartItensNovo.push(item);
        }

        // Insere dados na lista do carrinho...
        setCarrinhoItens(cartItensNovo);
        CalcTotal(cartItensNovo);
    }

    //Removendo o Item ao Carrinho
    function RemoveItemCarrinho(id){

        let cartItensNovo = [];

        //Localiza o item e atualiza...
        for( var prod of carrinhoItens){
            
            //Encontrou o item no carrinho
            if (prod.id == id){
                prod.qtd = prod.qtd - 1;
            }

            cartItensNovo.push(prod);
        }

       //Remove itens zerados...
       cartItensNovo = cartItensNovo.filter(function(item){
            return item.qtd > 0
       })

        // Atualiza lista do carrinho...
        setCarrinhoItens(cartItensNovo);
        CalcTotal(cartItensNovo);
    }

    function CalcTotal(items){
        let tot = 0;

        for(var item of items){
            tot = tot + (item.preco * item.qtd);
        }

        setTotalCarrinho(tot);
    }

    return <CartContext.Provider value={{carrinhoItens, setCarrinhoItens, AddItemCarrinho, RemoveItemCarrinho, totalCarrinho, setTotalCarrinho}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};