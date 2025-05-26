import { useNavigate } from "react-router-dom";

export default function Footer({ totalQuantidade }: any) {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-gradient-to-r from-red-600 to-red-500 py-4 fixed bottom-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex-1"></div> {/* Espaçador */}
        <button
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full transition-all duration-300 group"
          onClick={() => navigate("/cart")}
        >
          <div className="flex items-center">
            <span className="text-white font-medium">Ver carrinho</span>
            <div className="bg-white text-red-500 rounded-full px-3 py-1 ml-3 font-bold">
              {totalQuantidade}
            </div>
          </div>
          <div className="relative">
            <i className="fa fa-shopping-cart text-xl text-white group-hover:scale-110 transition-transform duration-200"></i>
            {totalQuantidade > 0 && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </div>
        </button>
        <div className="flex-1"></div> {/* Espaçador */}
      </div>
    </footer>
  );
}
