import { PopUp } from "./PopUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import { useCart } from "../hooks/useCart";
import { Navbar } from "./Navbar";
import { product } from "../data/categories";

export function MenuList({ onAdd, carrinho }: any) {
  const [activeCategory, setActiveCategory] = useState("hamburger");

  const filteredProducts = product.filter(
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

      <div className="px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(renderProductCard)}
        </div>
      </div>

      {isPopUpOpen && <PopUp onClose={() => setIsPopUpOpen(false)} />}
    </div>
  );
}
