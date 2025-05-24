import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";

export function Cart() {
  const { carrinho, totalValor, handleRemoveFromCart } = useCartContext();
  const navigate = useNavigate();

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
                  key={item.product.id}
                  className="flex items-center p-6 border-b border-gray-200 last:border-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-contain bg-white rounded"
                  />
                  <div className="flex-1 ml-6">
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.product.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-gray-600">
                        Quantidade: {item.quantity}
                      </div>
                      <div className="text-gray-800 font-medium">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.product.id)}
                    className="ml-6 text-red-500 hover:text-red-600"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
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
                onClick={() => {
                  // Aqui você pode adicionar a lógica de finalização do pedido
                  alert("Pedido finalizado com sucesso!");
                }}
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
