import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton";

const ConfirmedOrder = () => {
  const { carrinho } = useCartContext();
  const navigate = useNavigate();
  const json = localStorage.getItem("formData");
  const formData = json ? JSON.parse(json) : null;

  if (!carrinho) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-600">
        <BackButton />
        <h1 className="text-2xl font-semibold">Nenhum pedido encontrado.</h1>
      </div>
    );
  }
  const isOrderConfirmed = localStorage.getItem("isOrderConfirmed");
  if (!isOrderConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
        <BackButton />
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="bg-gray-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Nenhum pedido encontrado
            </h1>
            <p className="text-gray-600 mb-8">
              Parece que você ainda não fez nenhum pedido ou seu último pedido
              foi finalizado. Que tal fazer um pedido delicioso agora?
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Ver Cardápio
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8">
        <BackButton />
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Pedido Confirmado!
            </h1>
            <p className="text-gray-600">
              Seu pedido foi recebido e está sendo preparado
            </p>
          </div>

          <div className="space-y-6">
            {/* Dados do Cliente */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-[1.01]">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold ml-3 text-gray-800">
                  Dados do Cliente
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-medium">Nome:</p>
                  <p>{formData?.nome}</p>
                </div>
                <div>
                  <p className="font-medium">Telefone:</p>
                  <p>{formData?.telefone}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-medium">Endereço:</p>
                  <p>
                    {formData?.rua}, {formData?.numero}
                    {formData?.complemento && ` - ${formData.complemento}`}
                  </p>
                  <p>
                    {formData?.bairro} - {formData?.cidade}
                  </p>
                  <p>CEP: {formData?.cep}</p>
                </div>
              </div>
            </div>

            {/* Itens do Pedido */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-[1.01]">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold ml-3 text-gray-800">
                  Itens do Pedido
                </h2>
              </div>
              <div className="space-y-4">
                {carrinho.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Quantidade: {item.quantity}
                      </p>
                      {item.customizations?.removedIngredients?.length > 0 && (
                        <p className="text-red-500 text-sm">
                          Sem:{" "}
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
                    </div>
                    <div className="text-gray-800 font-medium">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                    <span>Total do Pedido:</span>
                    <span>
                      R${" "}
                      {carrinho
                        .reduce(
                          (total, item) =>
                            total + item.product.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Método de Pagamento */}
            <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-[1.01]">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold ml-3 text-gray-800">
                  Método de Pagamento
                </h2>
              </div>
              <div className="text-gray-700">
                <p className="font-medium">
                  Forma de pagamento:{" "}
                  <span className="capitalize">
                    {formData?.metodoPagamento}
                  </span>
                </p>
                {formData?.metodoPagamento === "dinheiro" &&
                  formData?.troco && (
                    <p className="mt-2">Troco para: R$ {formData.troco}</p>
                  )}
              </div>
            </div>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ConfirmedOrder;
