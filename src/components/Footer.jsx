export default function Footer({ totalQuantidade }) {
  return (
    <footer className='w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center'>
      <button className='flex items-center gap-2 text-white font-bold' id='cart-button' 
      onClick={() => {
        const cartModal = document.getElementById("cart-modal");
        cartModal.classList.toggle("hidden");
        cartModal.classList.toggle("flex");
      }
    }
      >
        <span>({totalQuantidade})</span>
        Veja meu pedido
        <i className='fa fa-cart-plus text-lg text-white'></i>
      </button>
    </footer>
  );
}