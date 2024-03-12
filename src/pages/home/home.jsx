import Navbar from "../../components/navbar/navbar.jsx";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine.jsx";

function Home() {
    return <>
        <Navbar showMenu={true}/>

        <div className="container">
            <div className="titulo text-center">
                <h1>Nosso Cardápio</h1>
                <p className="subtitulo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis, est sed ultricies finibus, massa elit laoreet sapien, sed varius sem ex ut mi.</p>
            </div>
        </div>
        
        <div className="text-center">
            <ProdutoVitrine/>
            <ProdutoVitrine/>
            <ProdutoVitrine/>
        </div>
    </>
}

export default Home;