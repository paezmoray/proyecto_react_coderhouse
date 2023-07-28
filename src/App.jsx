import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";
import BotonCondicional from "./componentes/BotonCondicional/BotonCondicional";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting={"¡Bienvenidos a Milu Tienda!"} /> } />
            <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
            <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/iniciarSesion" element={<BotonCondicional/>} />
            <Route path="*" element={<h2>Página en construcción...</h2> } />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>

      

    </>

  )
}

export default App

//<ItemListContainer greeting={"¡Bienvenidos a Milu Tienda!"} />
//<ItemDetailContainer />