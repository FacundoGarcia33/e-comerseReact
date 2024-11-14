import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itemdatail from "./itemdatailContainer.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const IdDataContainer = () => {
  const [producto, setProducto] = useState({});
  const { Idproducto } = useParams();
  const [loading, setLoading] = useState(true);

  const getproductId = () => {
    const docId = doc(db, "Productos", Idproducto);
    getDoc(docId)
      .then((dataId) => {
        const producDb = { id: dataId.id, ...dataId.data() };
        setProducto(producDb);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
        setLoading(false); 
      });
  };

  useEffect(() => {
    getproductId(); 
  }, [Idproducto]);

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <Itemdatail producto={producto} />
      )}
    </>
  );
};

export default IdDataContainer;