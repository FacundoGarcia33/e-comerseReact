import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./itemListcintainer.css";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import db from "../../db/db";

const ItemDataContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Idcategory } = useParams();

  const mostrarProducto = () => {
    const MisProductos = collection(db, "Productos");
    getDocs(MisProductos)
      .then((datadb) => {
        const getProducts = datadb.docs.map((productdb) => ({
          id: productdb.id, 
          ...productdb.data(),
        }));
        setProductos(getProducts);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  };

  const filterarPorductos = () => {
    const FilterProducts = collection(db, "Productos");
    const querycategory = query(FilterProducts, where("category", "==", Idcategory));
    getDocs(querycategory)
      .then((datacategory) => { 
        const findCategory = datacategory.docs.map((productsDb) => { 
          return { id: productsDb.id, ...productsDb.data() };
        });
        setProductos(findCategory);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error al filtrar productos:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (Idcategory) {
      filterarPorductos();
    } else {
      mostrarProducto();
    }
  }, [Idcategory]);

  return (
    <div className="Products">
      {loading ? (
        <div className="Loading">Cargando...</div>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.image ? producto.image[0] : "default_image_url"} alt={producto.name} />
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