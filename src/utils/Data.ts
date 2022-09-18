import { Sale } from "src/interfaces/tableInterfaces";

export const Sales: Sale[] = [
  {
    id: 1,
    name: "Mejor manzanas del mercado",
    description: "Fruits Desripcion",
    oldPrice: 100,
    newPrice: 50,
    image: "https://picsum.photos/200/300",
    since: "2022-09-18T16:28:13.698Z",
    category: 1,
    valorations: 10,
  },
];

export const Categories = [
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
