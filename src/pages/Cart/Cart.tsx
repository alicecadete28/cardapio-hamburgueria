import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { CartItem } from "../../types/CartItem";

export function Cart() {
  const { carrinho, totalValor, handleRemoveFromCart } = useCartContext();
  const navigate = useNavigate();
  const handleClick = (item: CartItem) => {
    navigate(`/item/${item.product.id}`, {
      state: { product: item.product },
    });
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
              {carrinho.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-6 border-b border-gray-200 last:border-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-contain bg-white rounded cursor-pointer"
                    onClick={() => handleClick(item)}
                  />
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
                      <div className="text-gray-600">
                        Quantidade: {item.quantity}
                      </div>
                      <div className="text-gray-800 font-medium">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleClick(item)}
                        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded text-sm transition-colors"
                      >
                        Personalizar
                      </button>
                      <button
                        onClick={() => {
                          console.log("Removendo item com ID:", item.id);
                          handleRemoveFromCart(item.id);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
    </div>
  );
}
