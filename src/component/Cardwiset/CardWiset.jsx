import "./CardWiset.css";
import { FaCartShopping } from "react-icons/fa6";

const CardWiset = () => {
  return (
    <>
      <div className="carrito">
        <FaCartShopping size={50} style={{ marginTop: "30px" }} />
        <p>1</p>
      </div>
    </>
  );
};

export default CardWiset;
