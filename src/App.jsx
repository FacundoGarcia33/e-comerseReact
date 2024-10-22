import "./index.css";
import ItemDataContainer from "./component/promise/itemListcontainer";
import Navbar from "./component/navBar/Navbar";
import IdDataContainer from "./component/idComponentes/IdDataContainer";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path="/"  element={<ItemDataContainer/>} />
      <Route path="/category/:Idcategory" element={<ItemDataContainer/>} />
      <Route path="/detail/:Idproducto" element={<IdDataContainer/>} />
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
