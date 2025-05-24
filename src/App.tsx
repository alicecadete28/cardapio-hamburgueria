import "./App.css";
import { Home } from "./pages/Home/Home";
import ProductDetailPage from "./pages/Item-details/ItemDetails";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/cardapio-hamburgueria">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
