import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css"
//import {pedidos} from "../../dados.js"
import api from "../../services/api.js";

function Historico(){

    const [pedidos, setPedidos] = useState([]);

    useEffect(function(){
        api.get("/pedidos")
        .then(function(resp){
            setPedidos(resp.data);
        })
        .catch(function(err){
            alert('Erro ao carregar produtos');
        })
    }, []);

    return <>
        <Navbar showMenu={true}/>

        <div className="container">
            <div className="titulo text-center">
                <h1>Histórico de Pedidos</h1>
            </div>

            <div className="box-pedidos">
                <table>
                    {
                        pedidos.map(function(ped){
                            return  <tr key={ped.id_pedido }>
                                    <td><strong>Pedido {ped.id_pedido}</strong></td>
                                    <td className="text-light">{ped.dt_pedido}</td>
                                    <td className="text-red">{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: "BRL"}).format(ped.total)}</td>
                                </tr>
                        })
                    }
                </table>
            </div>

        </div>

    </>
}

export default Historico;