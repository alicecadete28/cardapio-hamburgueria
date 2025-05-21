import "./App.css";

import { useCart } from "./hooks/useCart";

import { Header } from "./components/Header";

import { MenuList } from "./components/MenuList";

import { ModalCart } from "./components/ModalCart";

import Footer from "./components/Footer";
import { usePopUp } from "./hooks/usePopUp";

function App() {
  const {
    carrinho,
    totalQuantidade,
    // @ts-expect-error TS(2339): Property 'totalCount' does not exist on type '{ ca... Remove this comment to see the full error message
    totalCount,
    handleAddToCart,
    handleRemoveFromCart,
  } = useCart();

  const { openPopUp, isOpen } = usePopUp();
  return (
    <>
      <Header />

      <MenuList onAdd={handleAddToCart} openPopUp={openPopUp} />

      {isOpen && <PopUp />}

      <ModalCart
        totalCount={totalCount}
        handleRemoveFromCart={handleRemoveFromCart}
        carrinho={carrinho}
      />

      <Footer totalQuantidade={totalQuantidade} />
    </>
  );
}

export default App;
