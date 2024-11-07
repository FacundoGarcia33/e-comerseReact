import "./cards.css";
import { useContext } from "react";
import { Cartcontext } from "../context/context";
const Cards = () => {
    const {Cart, totalPrice, deleteId} =useContext(Cartcontext)
    return (
        <>
        <div className="productos-container">
        <h2>Productos del carrito</h2>
        <div className="cards-container">
            {
                Cart.map((productCart) => (
                    <div className="cards-carrito" key={productCart.id}>
                        <img src={productCart.image[0]} alt={productCart.name} className="card-image" />
                        <div className="card-details">
                            <h3 className="card-name">{productCart.name}</h3>
                            <p className="card-quantity">Cantidad: {productCart.quantity}</p>
                            <p className="card-price">Precio por unidad: ${productCart.price}</p>
                            <p className="card-total">Total: ${productCart.quantity * productCart.price}</p>
                            <p className="borrasProduct" onClick={() =>deleteId (productCart.id)}>Borrar producto</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    <p className="total">Total de la compra: {totalPrice()}</p>
</>
    );
};
export default Cards;