import "./index.css";
import ItemDataContainer from "./component/promise/itemListcontainer";
import Navbar from "./component/navBar/Navbar";
import Saludo from "./component/itemlistcontainer/Itemlistcontainer";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Saludo saludo={"Hola, muchachos"}/>}/>
      <Route path="/category" element={<ItemDataContainer />} />
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
