import { Product } from "../types/Product";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";
import burger4 from "../assets/burger4.png";
import burger5 from "../assets/burger5.png";
import burger6 from "../assets/burger6.png";
import burger7 from "../assets/burger7.png";
import burger8 from "../assets/burger8.png";
import refri1 from "../assets/refri1.png";
import refri2 from "../assets/refri2.png";
import batata from "../assets/batata.png";
import onion from "../assets/onion.png";
import nuggets from "../assets/nuggets.png";
import milkshake from "../assets/milkshake.png";
import casquinha from "../assets/casquinha.png";

export const product: (Product & { category: string })[] = [
  {
    id: "burger1",
    name: "Cheese Burger Duplo",
    description:
      "Dois suculentos hambúrgueres artesanais de 180g, queijo cheddar derretido, alface crocante, tomate fresco, cebola, picles e nosso molho especial da casa, servidos em um pão brioche quentinho e macio.",
    price: 35.9,
    image: burger1,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Brioche", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "2x Hambúrguer 180g",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Cheddar", removable: true, removed: false },
      { id: "alface", name: "Alface", removable: true, removed: false },
      { id: "tomate", name: "Tomate", removable: true, removed: false },
      { id: "cebola", name: "Cebola", removable: true, removed: false },
      { id: "picles", name: "Picles", removable: true, removed: false },
      { id: "molho", name: "Molho Especial", removable: true, removed: false },
    ],
  },
  {
    id: "burger2",
    name: "Cheese Burger",
    description:
      "Hambúrguer artesanal de 180g grelhado no ponto, coberto com queijo cheddar derretido, alface crocante e tomate fresco, servido em um pão brioche macio e amanteigado.",
    price: 35.9,
    image: burger2,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Brioche", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "Hambúrguer 180g",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Cheddar", removable: true, removed: false },
      { id: "alface", name: "Alface", removable: true, removed: false },
      { id: "tomate", name: "Tomate", removable: true, removed: false },
    ],
  },
  {
    id: "burger3",
    name: "Smash Burger",
    description:
      "Dois hambúrgueres smash de 100g prensados na chapa até ficarem crocantes, com queijo cheddar derretido, cebola caramelizada, picles crocantes e molho smash especial, servidos em um pão brioche macio.",
    price: 35.9,
    image: burger3,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Brioche", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "2x Smash Burger 100g",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Cheddar", removable: true, removed: false },
      {
        id: "cebola_caramelizada",
        name: "Cebola Caramelizada",
        removable: true,
        removed: false,
      },
      { id: "picles", name: "Picles", removable: true, removed: false },
      { id: "molho", name: "Molho Smash", removable: true, removed: false },
    ],
  },
  {
    id: "burger4",
    name: "Chicken Burger",
    description:
      "Filé de frango empanado na hora até ficar super crocante, com queijo prato derretido, alface americana, tomate e nossa maionese especial, servido em um pão com gergelim.",
    price: 35.9,
    image: burger4,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Brioche", removable: false, removed: false },
      {
        id: "frango",
        name: "Filé de Frango Empanado",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Prato", removable: true, removed: false },
      { id: "alface", name: "Alface", removable: true, removed: false },
      { id: "tomate", name: "Tomate", removable: true, removed: false },
      {
        id: "maionese",
        name: "Maionese Especial",
        removable: true,
        removed: false,
      },
    ],
  },
  {
    id: "burger5",
    name: "Premium Burger",
    description:
      "Hambúrguer premium de carne wagyu 200g, queijo gruyère importado, mix de cogumelos salteados, cebola caramelizada, rúcula fresca e molho trufado, servido em um pão com gergelim.",
    price: 35.9,
    image: burger5,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Australiano", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "Hambúrguer Wagyu 200g",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Gruyère", removable: true, removed: false },
      {
        id: "cebola_caramelizada",
        name: "Cebola Caramelizada",
        removable: true,
        removed: false,
      },
      {
        id: "cogumelos",
        name: "Mix de Cogumelos",
        removable: true,
        removed: false,
      },
      { id: "rucula", name: "Rúcula", removable: true, removed: false },
      {
        id: "molho_trufado",
        name: "Molho Trufado",
        removable: true,
        removed: false,
      },
    ],
  },
  {
    id: "burger6",
    name: "Salad Cheese Burger",
    description:
      "Hambúrguer de fraldinha suculento, queijo minas fresco, mix de folhas orgânicas, tomate cereja, pepino fresco e molho de mostarda com mel, servido em um pão com gergelim.",
    price: 35.9,
    image: burger6,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Integral", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "Hambúrguer de Fraldinha",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Minas", removable: true, removed: false },
      { id: "alface", name: "Mix de Folhas", removable: true, removed: false },
      { id: "tomate", name: "Tomate Cereja", removable: true, removed: false },
      { id: "pepino", name: "Pepino", removable: true, removed: false },
      {
        id: "molho_mostarda",
        name: "Molho de Mostarda e Mel",
        removable: true,
        removed: false,
      },
    ],
  },
  {
    id: "burger7",
    name: "Onion Rings Burger",
    description:
      "Hambúrguer artesanal de 180g, queijo cheddar derretido, anéis de cebola empanados e crocantes, bacon crocante e molho barbecue defumado, servido em um pão brioche macio.",
    price: 35.9,
    image: burger7,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Brioche", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "Hambúrguer 180g",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Cheddar", removable: true, removed: false },
      {
        id: "onion_rings",
        name: "Onion Rings",
        removable: true,
        removed: false,
      },
      { id: "bacon", name: "Bacon Crocante", removable: true, removed: false },
      {
        id: "barbecue",
        name: "Molho Barbecue",
        removable: true,
        removed: false,
      },
    ],
  },
  {
    id: "burger8",
    name: "Veggie Burger",
    description:
      "Hambúrguer vegano de grão-de-bico temperado com especiarias, queijo vegano, alface fresca, tomate, cebola roxa e pasta de abacate cremosa, servido em um pão vegano especial.",
    price: 35.9,
    image: burger8,
    category: "hamburger",
    ingredients: [
      { id: "pao", name: "Pão Vegano", removable: false, removed: false },
      {
        id: "hamburguer",
        name: "Hambúrguer de Grão-de-Bico",
        removable: false,
        removed: false,
      },
      { id: "queijo", name: "Queijo Vegano", removable: true, removed: false },
      { id: "alface", name: "Alface", removable: true, removed: false },
      { id: "tomate", name: "Tomate", removable: true, removed: false },
      {
        id: "cebola_roxa",
        name: "Cebola Roxa",
        removable: true,
        removed: false,
      },
      {
        id: "abacate",
        name: "Pasta de Abacate",
        removable: true,
        removed: false,
      },
    ],
  },
  {
    id: "refri1",
    name: "Coca-Cola",
    description: "Refrigerante Coca-Cola 350ml",
    price: 5.9,
    image: refri1,
    category: "bebidas",
    ingredients: [],
  },
  {
    id: "refri2",
    name: "Guaraná",
    description: "Refrigerante Coca-Cola 350ml",
    price: 5.9,
    image: refri2,
    category: "bebidas",
    ingredients: [],
  },
  {
    id: "batata",
    name: "Batata Frita",
    description: "Porção de batatas fritas crocantes",
    price: 12.9,
    image: batata,
    category: "acompanhamentos",
    ingredients: [],
  },
  {
    id: "onions",
    name: "Onion Rings",
    description: "Anéis de cebola empanados e crocantes",
    price: 14.9,
    image: onion,
    category: "acompanhamentos",
    ingredients: [],
  },
  {
    id: "nuggets",
    name: "Chicken Nuggets",
    description: "Porção de nuggets de frango crocantes (8 unidades)",
    price: 16.9,
    image: nuggets,
    category: "acompanhamentos",
    ingredients: [],
  },
  {
    id: "milkshake",
    name: "Milk Shake de Oreo",
    description: "Milk shake cremoso feito com o delicioso biscoito oreo",
    price: 18.9,
    image: milkshake,
    category: "sobremesas",
    ingredients: [],
  },
  {
    id: "casquinha",
    name: "Casquinha",
    description: "Casquinha de sorvete sabor baunilha",
    price: 8.9,
    image: casquinha,
    category: "sobremesas",
    ingredients: [],
  },
];
