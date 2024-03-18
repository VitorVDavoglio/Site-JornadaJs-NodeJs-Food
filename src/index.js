import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import { CartProvider } from './components/contexts/contexto-carrinho';

import "./style/global.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <CartProvider>
      <Rotas/> 
    </CartProvider>
  </>
)

