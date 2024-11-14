import "./Checkaut.css";
import FormChekaut from "./formCkaut";
import { useContext, useState } from "react";
import { Cartcontext } from "../context/context";
import { Timestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import { Link } from "react-router-dom";
import ValidarForm from "../../utils/form.js";

const Checkaut = () => {
    const [Valores, setValores] = useState({
        name: "",
        apellido: "",
        email: "",
        confirmEmail: "",
        phone: ""
    });

    const { Cart, totalPrice, BorrasProducto } = useContext(Cartcontext);
    const [idOrder, setIdOrder] = useState(null);

    const eventChange = (event) => {
        setValores({ ...Valores, [event.target.name]: event.target.value });
    };

    const eventSubmit = async (event) => { 
        event.preventDefault();

        
        if (Valores.email !== Valores.confirmEmail) {
            alert("Los emails no coinciden. Por favor, verifica y confirma tu email.");
            return;
        }

        const orden = {
            buyer: { ...Valores },
            productos: { ...Cart },
            fecha: Timestamp.fromDate(new Date()),
            total: totalPrice()
        };

        try {
            const response = await ValidarForm(Valores);
            if (response.status === "Error") throw new Error(response.error);

            console.log("Todo salió correctamente");
            TerminarOrden(orden);
        } catch (error) {
            console.log(error);
        }
    };

    const TerminarOrden = (newOrden) => {
        const orderRef = collection(db, "Orden");
        addDoc(orderRef, newOrden)
            .then((res) => setIdOrder(res.id)) 
            .catch((error) => {
                console.error("Error al crear la orden: ", error);
            })
            .finally(() => {
                // Borrar productos del carrito
                BorrasProducto();
            });
    };

    return (
        <div className="OrdenForm">
            {idOrder === null ? (
                <FormChekaut 
                    Valores={Valores} 
                    eventChange={eventChange} 
                    eventSubmit={eventSubmit} 
                />
            ) : (
                <div>
                    <h2>Su orden fue tomada con éxito</h2>
                    <p>Su Número de seguimiento es: {idOrder}</p>
                    <Link className="IncioForm" to="/">Volver al inicio</Link>
                </div>
            )}
        </div>
    );
};

export default Checkaut;
