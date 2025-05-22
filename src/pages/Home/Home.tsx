import { useCart } from "../../hooks/useCart";
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
  } = useCart();
  return (
    <>
      <Header />
      <MenuList onAdd={handleAddToCart} />
      <ModalCart
        totalCount={totalValor}
        handleRemoveFromCart={handleRemoveFromCart}
        carrinho={carrinho}
      />
      <Footer totalQuantidade={totalQuantidade} />
    </>
  );
}
