import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { CartItem } from "../../types/CartItem";
import { useState } from "react";
import { PopUp } from "../../components/PopUp";

export function Cart() {
  const { carrinho, totalValor, handleRemoveFromCart, handleAddToCart } =
    useCartContext();
  const navigate = useNavigate();
  const [quantidades, setQuantidades] = useState<{ [key: string]: number }>({});
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [updatedItemId, setUpdatedItemId] = useState<string | null>(null);

  const handleClick = (item: CartItem) => {
    const productWithCustomizations = {
      ...item.product,
      customizations: item.customizations,
    };

    navigate(`/item/${item.product.id}`, {
      state: {
        product: productWithCustomizations,
        currentQuantity: item.quantity,
        cartItemId: item.id,
      },
    });
  };

  // Inicializa as quantidades com os valores atuais do carrinho
  const initializeQuantidades = (item: CartItem) => {
    if (quantidades[item.id] === undefined) {
      setQuantidades((prev) => ({
        ...prev,
        [item.id]: item.quantity,
      }));
    }
  };

  const handleAumentar = (item: CartItem) => {
    setQuantidades((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || item.quantity) + 1,
    }));
  };

  const handleDiminuir = (item: CartItem) => {
    if ((quantidades[item.id] || item.quantity) > 0) {
      setQuantidades((prev) => ({
        ...prev,
        [item.id]: (prev[item.id] || item.quantity) - 1,
      }));
    }
  };

  const handleConcluir = (item: CartItem) => {
    const novaQuantidade = quantidades[item.id] || item.quantity;
    const diferenca = novaQuantidade - item.quantity;

    if (diferenca > 0) {
      // Adicionar itens
      for (let i = 0; i < diferenca; i++) {
        handleAddToCart({
          ...item.product,
          customizations: item.customizations,
        });
      }
    } else if (diferenca < 0) {
      // Remover itens
      for (let i = 0; i < Math.abs(diferenca); i++) {
        handleRemoveFromCart(item.id);
      }
    }

    setUpdatedItemId(item.id);
    setIsPopUpOpen(true);
    setTimeout(() => {
      setIsPopUpOpen(false);
      setUpdatedItemId(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <BackButton />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Meu Carrinho</h1>

        {carrinho.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Seu carrinho está vazio</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Ver cardápio
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              {carrinho.map((item) => {
                initializeQuantidades(item);
                return (
                  <div
                    key={item.id}
                    className="flex items-center p-6 border-b border-gray-200 last:border-0"
                  >
                    <div className="relative">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-contain bg-white rounded cursor-pointer"
                        onClick={() => handleClick(item)}
                      />
                      <div
                        className="absolute top-1 left-1 bg-white p-1 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => handleClick(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 ml-6">
                      <h3 className="text-lg font-semibold">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.product.description}
                      </p>
                      {item.customizations.removedIngredients.length > 0 && (
                        <p className="text-gray-600 text-sm mt-1">
                          <span className="text-red-500">Sem: </span>
                          {item.customizations.removedIngredients
                            .map(
                              (ingredientId) =>
                                item.product.ingredients.find(
                                  (i) => i.id === ingredientId
                                )?.name
                            )
                            .filter(Boolean)
                            .join(", ")}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDiminuir(item)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              -
                            </button>
                            <div className="text-lg font-medium bg-gray-200 px-4 py-1 rounded-md">
                              {quantidades[item.id] || item.quantity}
                            </div>
                            <button
                              onClick={() => handleAumentar(item)}
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              +
                            </button>
                            <button
                              onClick={() => handleConcluir(item)}
                              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 ml-2"
                            >
                              Concluir
                            </button>
                          </div>
                        </div>
                        <div className="text-gray-800 font-medium">
                          R$ {(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={() => navigate("/")}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg text-base font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Adicionar mais itens</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold">Total do pedido:</span>
                <span className="text-2xl font-bold">
                  R$ {totalValor.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
      {isPopUpOpen && (
        <PopUp
          title="Quantidade atualizada!"
          description="A quantidade do item foi atualizada com sucesso."
          onClose={() => {
            setIsPopUpOpen(false);
            setUpdatedItemId(null);
          }}
        />
      )}
    </div>
  );
}
