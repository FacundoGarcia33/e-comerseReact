import db from "../db/db.js";
import { addDoc,collection } from "firebase/firestore";

const productos = [
    {
      id: "10dgg55",
      name: "gorra nike",
      price: 1000,
      descripcion: "Gorra deportiva de la marca Nike, ideal para entrenar o usar a diario.",
      category: "gorras",
      stock: 3,
      image: ["/img/Gorranike.webp", "/img/gorranike2.jpg", "/img/gorranike3.jpg"]
    },
    {
      id: "55agda44",
      name: "gorra addidas",
      price: 1500,
      descripcion: "Gorra de Adidas, estilo clásico con logo bordado, cómoda y ajustable.",
      category: "gorras",
      stock: 5,
      image: ["/img/gorraAdiddas.webp", "/img/Gorraaddidas2.webp"]
    },
    {
      id: "js425da",
      name: "gorra lotto",
      price: 2000,
      descripcion: "Gorra Lotto, perfecta para un look casual o deportivo.",
      category: "gorras",
      stock: 8,
      image: ["/img/GorraLotto.webp", "/img/GorraLotto2.webp", "/img/GorraLotto3.jpg", "/img/Gorralotto4.jpg"]
    },
    {
      id: "fewug412",
      name: "remera roja",
      price: 3000,
      descripcion: "Remera roja de algodón, ideal para uso diario o deportes.",
      category: "remeras",
      stock: 6,
      image: ["/img/RemeraRoja.webp", "/img/remeraRoja2.webp"]
    },
    {
      id: "dh8ahd565",
      name: "remera verde addidas",
      price: 6000,
      descripcion: "Remera verde Adidas, diseño moderno con ajuste cómodo.",
      category: "remeras",
      stock: 2,
      image: ["/img/RemeraVerde.webp", "/img/remeraVerde2.webp"]
    },
    {
      id: "fewdwf889",
      name: "remera blanca nike de Mujer",
      price: 10000,
      descripcion: "Remera blanca Nike de alta calidad, perfecta para entrenamientos.",
      category: "remeras",
      stock: 1,
      image: ["/img/RemeraNike.webp", "/img/RemeraNikemujer2.webp"]
    },
    {
      id: "gfusugsd415",
      name: "campera Adiddas real Madrid",
      price: 15000,
      descripcion: "Campera oficial del Real Madrid Adidas, perfecta para días fríos.",
      category: "camperas",
      stock: 3,
      image: ["/img/camperaReal.webp", "/img/camperareal2.jpg", "/img/camperareal3.jpg", "/img/camperareal4.jpg"]
    },
    {
      id: "fjajd225",
      name: "campera addias Argentina",
      price: 12000,
      descripcion: "Campera Adidas de la selección Argentina, ideal para los fanáticos.",
      category: "camperas",
      stock: 4,
      image: ["/img/camperaArgentina.webp", "img/camperaArgentina2.webp", "/img/camperaArgentina3.webp"]
    },
  ];
  
const seedProducts = () => {
    const ProductsReft = collection(db, "Productos");
    productos.map(({id, ...dataProduct})=> {
        addDoc(ProductsReft,dataProduct)
    })

    console.log("Mis Productos")
    return 
}

seedProducts()
