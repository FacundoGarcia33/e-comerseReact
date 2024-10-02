import './Navbar.css';
import Brand from "../brand/Brand"
import Carrito from "../Cardwiset/CardWiset"
const Navbar = () => {
  return (
    <div className="nav">
        <Brand/>
        <ul className="listado">
            <li>gorras</li>
            <li>camperas</li>
            <li>remeras</li>
        </ul>
        <Carrito/>
    </div>
  )
}

export default Navbar