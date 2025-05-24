import { createContext, useContext, ReactNode } from "react";
import { useCart } from "../hooks/useCart";
import { Product } from "../types/Product";

interface CartContextData {
  carrinho: Array<{
    product: Product;
    quantity: number;
  }>;
  totalQuantidade: number;
  totalValor: number;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const cartData = useCart();

  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
}
