import React from "react";
import { useParams } from "react-router-dom"; // se usar rotas dinâmicas
import burger1 from "../../assets/burger1.png"; // Importando a imagem do burger
export default function ProductDetailPage({ quantityInCart = 2 }) {
  const product = {
    name: "Cheese Burger Duplo",
    description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa.",
    price: 35.9,
    image: burger1,
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 transition-all">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-xl object-cover"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <p className="text-2xl font-semibold text-green-600 mb-2">
              R$ {product.price.toFixed(2)}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-1">
              Quantidade no carrinho:
            </p>
            <div className="text-lg font-medium bg-gray-200 px-4 py-2 rounded-md inline-block">
              {quantityInCart}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
