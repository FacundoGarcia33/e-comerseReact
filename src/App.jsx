import "./index.css";
import ItemDataContainer from "./component/Item/itemListcontainer";
import Navbar from "./component/navBar/Navbar";
import IdDataContainer from "./component/Detail/IdDataContainer";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { CartPower } from "./component/context/context";
import Cards from "./component/Cards/cards";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartPower>

      <Navbar/>

      
      <Routes>
      <Route path="/"  element={<ItemDataContainer/>} />
      <Route path="/category/:Idcategory" element={<ItemDataContainer/>} />
      <Route path="/detail/:Idproducto" element={<IdDataContainer/>} />
      <Route path="/card" element={<Cards />} />
      </Routes>

      
      </CartPower>
      </BrowserRouter>
    </div>
  );
}

export default App;
