import { Category, Sale } from "src/interfaces/tableInterfaces";

export const Sales: Sale[] = [
  {
    id: 1,
    name: "Mejores manzanas del mercado",
    oldPrice: 100,
    newPrice: 50,
    image: "https://picsum.photos/200/300",
    since: "2022-09-18T16:28:13.698Z",
    category: "Frutas",
    stars: 48,
    valorations: 18,
    link: "",
  },
  {
    id: 2,
    name: "Nuevas frutas asdasdasddaasdasdasddasdasdaasdasdasddasdasdasdasda para ver",
    oldPrice: 75,
    newPrice: 80,
    image: "https://m.media-amazon.com/images/I/51JgH9mik9L._AC_SY135_.jpg",
    since: "2022-09-18T16:28:13.698Z",
    category: "Frutas",
    stars: 25,
    valorations: 10,
    link: "",
  },
  {
    id: 3,
    name: "Mejor manzanas del mercado",
    oldPrice: 100,
    newPrice: 50,
    image: "https://picsum.photos/200/300",
    since: "2022-09-18T16:28:13.698Z",
    category: "Frutas",
    stars: 48,
    valorations: 10,
    link: "",
  },
  {
    id: 4,
    name: "Nuevas frutas para ver",
    oldPrice: 75,
    newPrice: 80,
    image: "https://m.media-amazon.com/images/I/61hcR7g-0WL._AC_SX679_.jpg",
    since: "2022-09-18T16:28:13.698Z",
    category: "Frutas",
    stars: 48,
    valorations: 10,
    link: "",
  },
];

export const Categories: Category[] = [
  {
    id: 1,
    name: "Frutas",
    description: "Fruits Desripcion",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Verduras",
    description: "Fruits Desripcion",
    image: "https://picsum.photos/200/300",
  },
];
