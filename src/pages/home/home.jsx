import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";
//import {produtos} from "../../dados.js";
import api from "../../services/api.js";

function Home() {

    
    const [produtos, setProdutos] = useState([]);

    useEffect(function(){
        api.get("/produtos")
        .then(function(resp){
            setProdutos(resp.data);
        })
        .catch(function(err){
            alert('Erro ao carregar produtos');
        })
    }, []);
    
    

    return <>
        <Navbar showMenu={true}/>

        <div className="container">
            <div className="titulo text-center">
                <h1>Nosso Cardápio</h1>
                <p className="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, est sed ultricies finibus, massa elit laoreet sapien, sed varius sem ex ut mi.</p>
            </div>
        </div>
        
        <div className="text-center">
            {
                produtos.map(function(prod){
                    return <ProdutoVitrine key={prod.id_produto}
                                           id={prod.id_produto}
                                           nome={prod.nome}
                                           descricao={prod.descricao}
                                           preco={prod.preco}
                                           foto={prod.foto}/>
                })
            }
        </div>
    </>
}

export default Home;