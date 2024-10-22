import { useEffect, useState } from "react";
import { MisProductos } from "../../data/data.js";
import "./itemListcintainer.css";
const ItemDataContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    MisProductos()
      .then((respuesta) => {
        console.log(respuesta);
        setProductos(respuesta); 
      })
      .catch((error) => {
        console.error(error);
      })
    },[]);

  return (
    <div className="Products">
      {
        productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.image} alt="" />
            <h2>{producto.name}</h2>
            <p>Precio: ${producto.price}</p>
          </div>
        ))
      }
    </div>
  );
};

export default ItemDataContainer;