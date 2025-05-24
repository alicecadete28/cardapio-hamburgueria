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
import { PopUp } from "./PopUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";
import { Navbar } from "./Navbar";

export function MenuList({ onAdd, carrinho }: any) {
  const [activeCategory, setActiveCategory] = useState("hamburger");

  const products: (Product & { category: string })[] = [
    {
      id: "burger1",
      name: "Cheese Burger Duplo",
      description:
        "Pão levinho de fermentação natural com dois suculentos hambúrgueres artesanais",
      price: 35.9,
      image: burger1,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Brioche", removable: false },
        { id: "hamburguer", name: "2x Hambúrguer 180g", removable: false },
        { id: "queijo", name: "Queijo Cheddar", removable: true },
        { id: "alface", name: "Alface", removable: true },
        { id: "tomate", name: "Tomate", removable: true },
        { id: "cebola", name: "Cebola", removable: true },
        { id: "picles", name: "Picles", removable: true },
        { id: "molho", name: "Molho Especial", removable: true },
      ],
    },
    {
      id: "burger2",
      name: "Cheese Burger",
      description:
        "Pão levinho de fermentação natural com hambúrguer artesanal suculento",
      price: 35.9,
      image: burger2,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Brioche", removable: false },
        { id: "hamburguer", name: "Hambúrguer 180g", removable: false },
        { id: "queijo", name: "Queijo Cheddar", removable: true },
        { id: "alface", name: "Alface", removable: true },
        { id: "tomate", name: "Tomate", removable: true },
        { id: "cebola", name: "Cebola", removable: true },
        { id: "picles", name: "Picles", removable: true },
        { id: "molho", name: "Molho Especial", removable: true },
      ],
    },
    {
      id: "burger3",
      name: "Smash Burger",
      description: "Hambúrguer fino e crocante feito na chapa quente",
      price: 35.9,
      image: burger3,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Brioche", removable: false },
        { id: "hamburguer", name: "2x Smash Burger 100g", removable: false },
        { id: "queijo", name: "Queijo Cheddar", removable: true },
        {
          id: "cebola_caramelizada",
          name: "Cebola Caramelizada",
          removable: true,
        },
        { id: "picles", name: "Picles", removable: true },
        { id: "molho", name: "Molho Smash", removable: true },
      ],
    },
    {
      id: "burger4",
      name: "Chicken Burger",
      description: "Pão levinho de fermentação natural...",
      price: 35.9,
      image: burger4,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Brioche", removable: false },
        { id: "frango", name: "Filé de Frango Empanado", removable: false },
        { id: "queijo", name: "Queijo Prato", removable: true },
        { id: "alface", name: "Alface", removable: true },
        { id: "tomate", name: "Tomate", removable: true },
        { id: "maionese", name: "Maionese Especial", removable: true },
      ],
    },
    {
      id: "burger5",
      name: "Premium Burger",
      description: "Pão levinho de fermentação natural...",
      price: 35.9,
      image: burger5,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Australiano", removable: false },
        { id: "hamburguer", name: "Hambúrguer Wagyu 200g", removable: false },
        { id: "queijo", name: "Queijo Gruyère", removable: true },
        {
          id: "cebola_caramelizada",
          name: "Cebola Caramelizada",
          removable: true,
        },
        { id: "cogumelos", name: "Mix de Cogumelos", removable: true },
        { id: "rucula", name: "Rúcula", removable: true },
        { id: "molho_trufado", name: "Molho Trufado", removable: true },
      ],
    },
    {
      id: "burger6",
      name: "Salad Cheese Burger",
      description: "Pão levinho de fermentação natural...",
      price: 35.9,
      image: burger6,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Integral", removable: false },
        { id: "hamburguer", name: "Hambúrguer de Fraldinha", removable: false },
        { id: "queijo", name: "Queijo Minas", removable: true },
        { id: "alface", name: "Mix de Folhas", removable: true },
        { id: "tomate", name: "Tomate Cereja", removable: true },
        { id: "pepino", name: "Pepino", removable: true },
        {
          id: "molho_mostarda",
          name: "Molho de Mostarda e Mel",
          removable: true,
        },
      ],
    },
    {
      id: "burger7",
      name: "Onion Rings Burger",
      description: "Pão levinho de fermentação natural...",
      price: 35.9,
      image: burger7,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Brioche", removable: false },
        { id: "hamburguer", name: "Hambúrguer 180g", removable: false },
        { id: "queijo", name: "Queijo Cheddar", removable: true },
        { id: "onion_rings", name: "Onion Rings", removable: true },
        { id: "bacon", name: "Bacon Crocante", removable: true },
        { id: "barbecue", name: "Molho Barbecue", removable: true },
      ],
    },
    {
      id: "burger8",
      name: "Veggie Burger",
      description: "Pão levinho de fermentação natural...",
      price: 35.9,
      image: burger8,
      category: "hamburger",
      ingredients: [
        { id: "pao", name: "Pão Vegano", removable: false },
        {
          id: "hamburguer",
          name: "Hambúrguer de Grão-de-Bico",
          removable: false,
        },
        { id: "queijo", name: "Queijo Vegano", removable: true },
        { id: "alface", name: "Alface", removable: true },
        { id: "tomate", name: "Tomate", removable: true },
        { id: "cebola_roxa", name: "Cebola Roxa", removable: true },
        { id: "abacate", name: "Pasta de Abacate", removable: true },
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
  ];

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [quantidades, setQuantidades] = useState<{ [key: string]: number }>({});

  const handleAumentar = (productId: string) => {
    setQuantidades((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDiminuir = (productId: string) => {
    if ((quantidades[productId] || 0) > 0) {
      setQuantidades((prev) => ({
        ...prev,
        [productId]: prev[productId] - 1,
      }));
    }
  };

  const handleAdd = (product: Product) => {
    const quantidade = quantidades[product.id] || 0;
    for (let i = 0; i < quantidade; i++) {
      onAdd(product);
    }
    setIsPopUpOpen(true);
    setQuantidades((prev) => ({
      ...prev,
      [product.id]: 0,
    }));
  };

  const navigate = useNavigate();

  const handleClick = (product: Product) => {
    navigate(`/item/${product.id}`, { state: { product } });
  };

  const getItemQuantity = (productId: string) => {
    const item = carrinho.find(
      (item: { product: Product; quantity: number }) =>
        item.product.id === productId
    );
    return item ? item.quantity : 0;
  };

  const renderProductCard = (product: Product) => (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      key={product.id}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-contain bg-white cursor-pointer"
          onClick={() => handleClick(product)}
        />
        <div className="absolute top-2 right-2 bg-gray-900 text-white px-3 py-1 rounded-full">
          R$ {product.price.toFixed(2)}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>No carrinho:</span>
            <span className="font-medium">{getItemQuantity(product.id)}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleDiminuir(product.id)}
                className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center transition-colors"
              >
                -
              </button>
              <span className="w-8 text-center font-medium">
                {quantidades[product.id] || 0}
              </span>
              <button
                onClick={() => handleAumentar(product.id)}
                className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAdd(product)}
              disabled={(quantidades[product.id] || 0) === 0}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="text-center py-[70px]">
        <h2 className="text-3xl font-bold mb-2">Conheça nosso menu</h2>
        <p className="text-gray-600">Escolha seus itens favoritos</p>
      </div>

      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="px-6 md:px-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(renderProductCard)}
        </div>
      </div>

      {isPopUpOpen && <PopUp onClose={() => setIsPopUpOpen(false)} />}
    </div>
  );
}
