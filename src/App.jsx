import './App.css'

import { useCart } from './hooks/useCart';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';
import { ModalCart } from './components/ModalCart';
import Footer from './components/Footer';

function App() {
  const {
    carrinho,
    totalQuantidade,
    totalCount,
    handleAddToCart,
    handleRemoveFromCart
  } = useCart();
  return (
    <>
      <Header/>
      <MenuList onAdd={handleAddToCart}/>
      <ModalCart totalCount={totalCount} handleRemoveFromCart={handleRemoveFromCart} carrinho={carrinho}/>
      <Footer totalQuantidade={totalQuantidade}/>
    </>
  );
}

export default App
