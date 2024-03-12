import Navbar from "../../components/navbar/navbar.jsx";
import "./historico.css"

function Historico(){

    return <>
        <Navbar showMenu={true}/>

        <div className="container">
            <div className="titulo text-center">
                <h1>Histórico de Pedidos</h1>
            </div>

            <div className="box-pedidos">
                <table>
                    <tr>
                        <td><strong>Pedido 321321</strong></td>
                        <td className="text-light">14/01/2024</td>
                        <td className="text-red">R$ 500,00</td>
                    </tr>

                    <tr>
                        <td><strong>Pedido 321322</strong></td>
                        <td className="text-light">14/01/2024</td>
                        <td className="text-red">R$ 500,00</td>
                    </tr>

                    <tr>
                        <td><strong>Pedido 321323</strong></td>
                        <td className="text-light">14/01/2024</td>
                        <td className="text-red">R$ 500,00</td>
                    </tr>

                    <tr>
                        <td><strong>Pedido 321324</strong></td>
                        <td className="text-light">14/01/2024</td>
                        <td className="text-red">R$ 500,00</td>
                    </tr>
                </table>
            </div>

        </div>

    </>
}

export default Historico;