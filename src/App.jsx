import './App.css'

import { useCart } from './hooks/useCart';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';
import { ModalCart } from './components/ModalCart';
import Footer from './components/Footer';
import { usePopUp } from './hooks/usePopUp';

function App() {
  const {
    carrinho,
    totalQuantidade,
    totalCount,
    handleAddToCart,
    handleRemoveFromCart
  } = useCart();

  const {
    openPopUp,
    isOpen
  } = usePopUp();
  return (
    <>
      <Header/>
      <MenuList onAdd={handleAddToCart} openPopUp={openPopUp}/>
       {isOpen && <PopUp />}
      <ModalCart totalCount={totalCount} handleRemoveFromCart={handleRemoveFromCart} carrinho={carrinho}/>
      <Footer totalQuantidade={totalQuantidade}/>
    </>
  );
}

export default App
