//import GorraNike from "../../public/GorraNike.webp"
const productos = [
  {
    id: "10dgg55",
    name: "gorra nike",
    price: 1000,
    descripcion: "Gorra deportiva de la marca Nike, ideal para entrenar o usar a diario.",
    category: "gorras",
    stock: 3,
    image: "/img/Gorranike.webp",
  },
  {
    id: "55agda44",
    name: "gorra addidas",
    price: 1500,
    descripcion: "Gorra de Adidas, estilo clásico con logo bordado, cómoda y ajustable.",
    category: "gorras",
    stock: 5,
    image: "/img/gorraAdiddas.webp",
  },
  {
    id: "js425da",
    name: "gorra lotto",
    price: 2000,
    descripcion: "Gorra Lotto, perfecta para un look casual o deportivo.",
    category: "gorras",
    stock: 8,
    image: "/img/GorraLotto.webp",
  },
  {
    id: "fewug412",
    name: "remera roja",
    price: 3000,
    descripcion: "Remera roja de algodón, ideal para uso diario o deportes.",
    category: "remeras",
    stock: 6,
    image: "/img/RemeraRoja.webp",
  },
  {
    id: "dh8ahd565",
    name: "remera verde addidas",
    price: 6000,
    descripcion: "Remera verde Adidas, diseño moderno con ajuste cómodo.",
    category: "remeras",
    stock: 2,
    image: "/img/RemeraVerde.webp",
  },
  {
    id: "fewdwf889",
    name: "remera blanca nike",
    price: 10000,
    descripcion: "Remera blanca Nike de alta calidad, perfecta para entrenamientos.",
    category: "remeras",
    stock: 1,
    image: "/img/RemeraNike.webp",
  },
  {
    id: "gfusugsd415",
    name: "campera Adiddas real Madrid",
    price: 15000,
    descripcion: "Campera oficial del Real Madrid Adidas, perfecta para días fríos.",
    category: "camperas",
    stock: 3,
    image: "/img/camperaReal.webp",
  },
  {
    id: "fjajd225",
    name: "campera addias Argentina",
    price: 12000,
    descripcion: "Campera Adidas de la selección Argentina, ideal para los fanáticos.",
    category: "camperas",
    stock: 4,
    image: "/img/camperaArgentina.webp",
  },
];



const MisProductos = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    },1000);
  });
};

export { MisProductos };