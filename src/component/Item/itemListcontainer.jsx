import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./itemListcintainer.css";
import { collection, getDocs } from "firebase/firestore"; // Cambia getDoc por getDocs
import db from "../../db/db";

const ItemDataContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Idcategory } = useParams();

  const mostrarProducto = () => {
    const MisProductos = collection(db, "productos");

    getDocs(MisProductos) // Cambia getDoc por getDocs
      .then((datadb) => {
        const getProducts = datadb.docs.map((productdb) => {
          return { id: productdb.id, ...productdb.data() };
        });
        setProductos(getProducts);
        setLoading(false); // Cambia el estado de loading a false después de cargar
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    mostrarProducto();
  }, [Idcategory]);

  return (
    <div className="Products">
      {loading ? (
        <div className="Loading">Cargando...</div>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.image[0]} alt="" />
            <h2 className="name">{producto.name}</h2>
            <p>Precio: ${producto.price}</p>
            <p>Category: {producto.category}</p>
            <Link to={"/detail/" + producto.id}>
              <button>Ver más</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemDataContainer;
