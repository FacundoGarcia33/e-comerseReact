import { useState } from "react";
import "./itemCount.css"; 

const ItemContador = ({ stock, addproductos } ) => {
    const [count, setCount] = useState(1);

    const aumentar = () => {
        if (count < stock) {
            setCount(count + 1); 
        }
    };

    const disminuir = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    

    return (
        <div className="contador-container">
            <div className="sumar">
                <button onClick={aumentar}> + </button>
                <p>{count}</p>
                <button onClick={disminuir}> - </button>
            </div>
            <button onClick={()=> addproductos(count)} className="agregar">Agregar al carrito</button>
        </div>
    );
};

export default ItemContador;