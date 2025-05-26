import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"; // se usar rotas dinâmicas
import burger1 from "../../assets/burger1.png"; // Importando a imagem do burger
import { Product } from "../../types/Product";
import { useCartContext } from "../../contexts/CartContext";
import { PopUp } from "../../components/PopUp";
import { BackButton } from "../../components/BackButton";

interface LocationState {
  product: Product;
  currentQuantity?: number;
  cartItemId?: string;
}

export default function ProductDetailPage() {
  const { state } = useLocation();
  const { product, currentQuantity, cartItemId } = state as LocationState;
  const { carrinho, handleAddToCart, handleRemoveFromCart } = useCartContext();
  const navigate = useNavigate();
  const [novaQuantidade, setNovaQuantidade] = useState(0);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);

  // Encontra o item atual no carrinho com as mesmas customizações
  const getCurrentCartItem = () => {
    if (cartItemId) {
      return carrinho.find((item) => item.id === cartItemId);
    }
    return carrinho.find(
      (item) =>
        item.product.id === product.id &&
        JSON.stringify(item.customizations.removedIngredients.sort()) ===
          JSON.stringify(removedIngredients.sort())
    );
  };

  // Inicializa os estados com os valores do item do carrinho
  useEffect(() => {
    const cartItem = getCurrentCartItem();

    // Inicializa a quantidade
    if (currentQuantity !== undefined) {
      setNovaQuantidade(currentQuantity);
    } else if (cartItem) {
      setNovaQuantidade(cartItem.quantity);
    } else {
      setNovaQuantidade(0);
    }

    // Inicializa os ingredientes removidos
    if (cartItem) {
      setRemovedIngredients(cartItem.customizations.removedIngredients);
    } else if (product.customizations?.removedIngredients) {
      setRemovedIngredients(product.customizations.removedIngredients);
    } else {
      setRemovedIngredients([]);
    }
  }, [cartItemId, product.id]);

  const getItemQuantity = () => {
    const item = getCurrentCartItem();
    return item ? item.quantity : 0;
  };

  const handleAumentar = () => {
    setNovaQuantidade((prev) => prev + 1);
  };

  const handleDiminuir = () => {
    if (novaQuantidade > 0) {
      setNovaQuantidade((prev) => prev - 1);
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
    const currentCartItem = getCurrentCartItem();
    const currentQuantity = currentCartItem ? currentCartItem.quantity : 0;

    // Se houver um item no carrinho, primeiro remove ele completamente
    if (currentCartItem) {
      for (let i = 0; i < currentQuantity; i++) {
        handleRemoveFromCart(currentCartItem.id);
      }
    }

    // Adiciona o item com as novas configurações
    const customizedProduct = {
      ...product,
      customizations: {
        removedIngredients: removedIngredients,
      },
    };

    for (let i = 0; i < novaQuantidade; i++) {
      handleAddToCart(customizedProduct);
    }

    setIsPopUpOpen(true);

    // Redireciona para o carrinho após um pequeno delay para o PopUp ser visível
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <BackButton />
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        onClick={() => toggleIngredient(ingredient.id)}
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

            <p className="text-2xl font-semibold text-green-600 mb-6">
              R$ {product.price.toFixed(2)}
            </p>

            <div className="mt-4">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-500">
                  Quantidade atual no carrinho: {getItemQuantity()}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleDiminuir}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      -
                    </button>
                    <div className="text-lg font-medium bg-gray-200 px-4 py-2 rounded-md min-w-[3rem] text-center">
                      {novaQuantidade}
                    </div>
                    <button
                      onClick={handleAumentar}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleConcluir}
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Concluir edições</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopUpOpen && (
        <PopUp
          title="Carrinho atualizado!"
          description="O item foi atualizado com sucesso."
          onClose={() => setIsPopUpOpen(false)}
        />
      )}
    </div>
  );
}
