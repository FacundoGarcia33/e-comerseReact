import "./Navbar.css";
import Brand from "../brand/Brand";
import Carrito from "../Cardwiset/CardWiset";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Brand />
      <ul className="listado">
        <Link to="/">Gorras</Link>
        <Link to="/">Camperas</Link>
        <Link to="/">Remeras</Link>
      </ul>
      <Carrito />
    </div>
  );
};

export default Navbar;
