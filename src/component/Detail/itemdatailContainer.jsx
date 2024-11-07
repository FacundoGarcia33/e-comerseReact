import ItemContador from "../itemCount/ItemCount";
import "./IdDataContainer.css";
import { useContext, useState } from "react";
import { Cartcontext } from "../context/context";

const Itemdatail = ({ producto }) => {
    const { Micard } = useContext(Cartcontext);
    
    const addproductos = (count) => { 
        const productsCard = { ...producto, quantity: count }; // Asegúrate de que sea 'quantity'
        Micard(productsCard);
    };
    
    const [currentImage, setCurrentImage] = useState(producto.image && producto.image.length > 0 ? producto.image[0] : 'ruta/a/imagen/por/defecto.jpg');

    return (
        <div className="ContainerDetail">
            <div className="image-gallery">
                {producto.image && producto.image.map((image) => (
                    <img className="thumbnail" src={image} key={image} 
                         onClick={() => setCurrentImage(image)} 
                         alt=""
                    />
                ))}
            </div>
            <div className="Productos">
                <div className="cards">
                    <img src={currentImage} alt={producto.name} className="main-image" />
                    <h2 className="name">{producto.name}</h2>
                    <p className="description">Precio: ${producto.price}</p>
                    <p>Category: {producto.category}</p>
                    <p className="description">{producto.descripcion}</p>
                    <ItemContador stock={producto.stock} addproductos={addproductos} />
                </div>
            </div>
        </div>
    );
};

export default Itemdatail;