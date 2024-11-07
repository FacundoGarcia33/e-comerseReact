import "./CardWiset.css";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { Cartcontext } from "../context/context";
import { Link } from "react-router-dom";

const CardWiset = () => {
    const { totalQuantyti } = useContext(Cartcontext);
    const carrito = totalQuantyti()
    return (
        <>
            <Link to="/card" className="carrito">
                <FaCartShopping size={30} style={{ marginTop: "37px", marginBottom: "5px" }} />
                <p>{carrito >= 1? totalQuantyti(): ""}</p>
            </Link>
        </>
    );
};

export default CardWiset;