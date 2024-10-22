import { useEffect, useState } from "react";
import { MisProductos } from "../../data/data.js";
import { useParams } from "react-router-dom";
import  "./IdDataContainer.css"


const IdDataContainer = () => {
  const [productos, setProductos] = useState([]);
  const {Idproducto} = useParams()

  useEffect(() => {
    MisProductos()
      .then((data) => {
        if(Idproducto) {
          const filtrarid = data.filter((productos) => productos.id === Idproducto)
          setProductos(filtrarid)
        }else {
          setProductos(data)
        }
      })
      .catch((error) => {
        console.error(error);
      })
    },[Idproducto]);

  return (
    <div className="Products">
      {
        productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.image} alt="" />
            <h2>{producto.name}</h2>
            <p className="descripccion">Precio: ${producto.price}</p>
            <p>category: {producto.category}</p>
            <p className="descripccion">{producto.descripcion}</p>
          </div>
        ))
      }
    </div>
  );
};

export default IdDataContainer;