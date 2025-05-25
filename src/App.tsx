import "./App.css";
import { Home } from "./pages/Home/Home";
import ProductDetailPage from "./pages/Item-details/ItemDetails";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import ConfirmedOrder from "./pages/Confirmation/Confirmation";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/cardapio-hamburgueria">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<ConfirmedOrder />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
