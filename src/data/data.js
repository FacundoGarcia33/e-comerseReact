//import GorraNike from "../../public/GorraNike.webp"
const productos = [
  {
    id: "10dgg55",
    name: "gorra nike",
    price: 1000,
    descripcion: "",
    category: "gorras",
    stock: 3,
    image: "/img/Gorranike.webp",
  },
  {
    id: "55agda44",
    name: "gorra addidas",
    price: 1500,
    descripcion: "",
    category: "gorras",
    stock: 5,
    image: "",
  },
  {
    id: "js425da",
    name: "gorra lotto",
    price: 2000,
    descripcion: "",
    category: "gorras",
    stock: 8,
    image: "",
  },
  {
    id: "fewug412",
    name: "remera roja",
    price: 3000,
    descripcion: "",
    category: "remeras",
    stock: 6,
    image: "",
  },
  {
    id: "dh8ahd565",
    name: "remera verde addidas",
    price: 6000,
    descripcion: "",
    category: "remeras",
    stock: 2,
    image: "",
  },
  {
    id: "fewdwf889",
    name: "remera blanca nike",
    price: 10000,
    descripcion: "",
    category: "remeras",
    stock: 1,
    image: "",
  },

  {
    id: "gfusugsd415",
    name: "campera nike real Madrid",
    price: 15000,
    descripcion: "",
    category: "camperas",
    stock: 3,
    image: "",
  },
  {
    id: "fjajd225",
    name: "campera addias Argentina",
    price: 12000,
    descripcion: "",
    category: "camperas",
    stock: 4,
    image: "",
  },
];


const MisProductos = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    },2000);
  });
};

export { MisProductos };