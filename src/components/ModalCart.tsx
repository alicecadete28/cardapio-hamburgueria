import { Product } from "../types/Product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ModalCartProps {
  totalCount: string;
  handleRemoveFromCart: (productId: string) => void;
  carrinho: CartItem[];
}

export function ModalCart({
  totalCount,
  handleRemoveFromCart,
  carrinho,
}: ModalCartProps) {
  return (
    <div
      className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center hidden"
      id="cart-modal"
    >
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>

        <div id="cart-items" className="flex justify-between mb-2 flex-col">
          <ul>
            {carrinho.map((item) => (
              <li
                key={item.product.id}
                className="flex items-center justify-between border-b-2 py-2"
              >
                {item.quantity} x R$ {item.product.price.toFixed(2)} -{" "}
                {item.product.name}
                <button
                  className="bg-red-500 text-white rounded ml-2 px-2"
                  onClick={() => handleRemoveFromCart(item.product.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-bold">
          Total: <span>{totalCount}</span>
        </p>

        <p className="font-bold mt-4">Endereço de entrega</p>

        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="address"
          className="w-full border-2 p-1 rounded my-1"
        />

        <p className="text-red-500 hidden" id="address-warn"></p>

        <div className="flex items-center justify-between mt-4 w-full">
          <button
            id="close-modal-btn"
            onClick={() => {
              const cartModal = document.getElementById("cart-modal");

              if (cartModal) {
                cartModal.classList.toggle("hidden");
                cartModal.classList.toggle("flex");
              }
            }}
          >
            Fechar
          </button>

          <button
            className="bg-green-500 text-white py-1 rounded px-4"
            id="checkout-btn"
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
}
