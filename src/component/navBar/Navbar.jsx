import "./Navbar.css";
import Brand from "../brand/Brand";
import Carrito from "../Cardwiset/CardWiset";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Brand />
      <ul className="listado">
        <li><Link to="/category/gorras" className="category">Gorras</Link></li>
        <li><Link to="/category/camperas" className="category">Camperas</Link></li>
        <li><Link to="/category/remeras" className="category">Remeras</Link></li>
      </ul>
      <Carrito />
    </div>
  );
};

export default Navbar;
