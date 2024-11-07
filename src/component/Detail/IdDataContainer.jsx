import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itemdatail from "./itemdatailContainer.jsx";


const IdDataContainer = () => {
  const [producto, setProducto] = useState({});
  const { Idproducto } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, [Idproducto]);

  return (
    <>
      {loading ? (<div>Cargando...</div>) : <Itemdatail producto={producto} />}
    </>
  );
};

export default IdDataContainer;