import "./App.css";
import { Home } from "./pages/Home/Home";
import ProductDetailPage from "./pages/Item-details/ItemDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* rota padrão */}
        <Route path="/home" element={<Home />} />
        <Route path="/item/burger1" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
