import { useCartContext } from "../../contexts/CartContext";
import { Header } from "../../components/Header";
import { MenuList } from "../../components/MenuList";
import { ModalCart } from "../../components/ModalCart";
import Footer from "../../components/Footer";

export function Home() {
  const {
    carrinho,
    totalQuantidade,
    totalValor,
    handleAddToCart,
    handleRemoveFromCart,
  } = useCartContext();

  return (
    <>
      <Header />
      <MenuList onAdd={handleAddToCart} carrinho={carrinho} />
      <ModalCart
        totalCount={totalValor.toFixed(2)}
        handleRemoveFromCart={handleRemoveFromCart}
        carrinho={carrinho}
      />
      <Footer totalQuantidade={totalQuantidade} />
    </>
  );
}
