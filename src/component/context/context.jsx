import { createContext, useState } from "react";

const Cartcontext = createContext();

const CartPower = ({ children }) => {
    const [Cart, setCart] = useState([])
    
    const Micard = (newProduct) => {
        const condicion = inCard(newProduct.id)
        if (condicion) {
            const temCamp = [...Cart]
            const findIndex = temCamp.findIndex((productCart)=> productCart.id===newProduct.id)
            temCamp[findIndex].quantity=temCamp[findIndex].quantity + newProduct.quantity
            setCart(temCamp)
        }else {
            setCart([...Cart, newProduct])
        }
    }
    const inCard = (idproduct) => {
      return  Cart.some((productCart) => productCart.id=== idproduct)
    }
    const totalQuantyti = () => {
        const totalQuantyti = Cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return totalQuantyti
    }
    const totalPrice = () => {
        const totales = Cart.reduce((total, productCart) => 
        total + (productCart.quantity * productCart.price), 0)
        return totales
    }
    const deleteId =(idproduct) => {
        const filterProducts = Cart.filter((productCart) => productCart.id !== idproduct)
        setCart(filterProducts)
    }
    return (
        <Cartcontext.Provider value={{ Cart, Micard, totalQuantyti, totalPrice, deleteId}}>
            {children}
        </Cartcontext.Provider>
    );
};

export { CartPower, Cartcontext };