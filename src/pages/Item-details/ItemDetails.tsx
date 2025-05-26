import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"; // se usar rotas dinâmicas
import burger1 from "../../assets/burger1.png"; // Importando a imagem do burger
import { Product } from "../../types/Product";
import { useCartContext } from "../../contexts/CartContext";
import { PopUp } from "../../components/PopUp";
import { BackButton } from "../../components/BackButton";

export default function ProductDetailPage() {
  const { state } = useLocation();
  const { product } = state as { product: Product };
  const { carrinho, handleAddToCart } = useCartContext();
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState(0);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);

  // Verifica se o item veio do carrinho e carrega os ingredientes removidos
  useEffect(() => {
    const cartItem = carrinho.find((item) => item.product.id === product.id);
    if (cartItem && cartItem.customizations.removedIngredients) {
      setRemovedIngredients(cartItem.customizations.removedIngredients);
    }
  }, [product.id, carrinho]);

  const getItemQuantity = (productId: string) => {
    const item = carrinho.find((item) => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAumentar = () => {
    setQuantidade((prev) => prev + 1);
  };

  const handleDiminuir = () => {
    if (quantidade > 0) {
      setQuantidade((prev) => prev - 1);
    }
  };

  const toggleIngredient = (ingredientId: string) => {
    setRemovedIngredients((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId]
    );
  };

  const handleConcluir = () => {
    const customizedProduct = {
      ...product,
      customizations: {
        removedIngredients: removedIngredients,
      },
    };

    for (let i = 0; i < quantidade; i++) {
      handleAddToCart(customizedProduct);
    }
    setIsPopUpOpen(true);
    setQuantidade(0);
    setRemovedIngredients([]);

    // Redireciona para a home após um pequeno delay para o PopUp ser visível
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <BackButton />
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

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Ingredientes</h2>
              <div className="space-y-2">
                {product.ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="flex items-center">
                      <span
                        className={`${
                          removedIngredients.includes(ingredient.id)
                            ? "line-through text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        {ingredient.name}
                      </span>
                      {!ingredient.removable && (
                        <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                          Não removível
                        </span>
                      )}
                    </span>
                    {ingredient.removable && (
                      <button
                        onClick={() => {
                          toggleIngredient(ingredient.id);
                        }}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          removedIngredients.includes(ingredient.id)
                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                      >
                        {removedIngredients.includes(ingredient.id)
                          ? "Adicionar"
                          : "Remover"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-2xl font-semibold text-green-600 mb-2">
              R$ {product.price.toFixed(2)}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                Quantidade atual no carrinho: {getItemQuantity(product.id)}
              </p>
              <p className="text-sm text-gray-500">
                Nova quantidade a adicionar:
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDiminuir}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  -
                </button>
                <div className="text-lg font-medium bg-gray-200 px-4 py-2 rounded-md">
                  {quantidade}
                </div>
                <button
                  onClick={handleAumentar}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={handleConcluir}
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                  disabled={quantidade === 0}
                >
                  Concluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopUpOpen && (
        <PopUp
          title="Item adicionado com sucesso!"
          description="O item foi adicionado ao carrinho com sucesso."
          onClose={() => setIsPopUpOpen(false)}
        />
      )}
    </div>
  );
}
