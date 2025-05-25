import { createContext, useContext, ReactNode } from "react";
import { useCart } from "../hooks/useCart";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";

interface CartContextData {
  carrinho: CartItem[];
  handleAddToCart: (product: Product) => void;
  totalQuantidade: number;
  totalValor: number;
  handleRemoveFromCart: (itemId: string) => void;
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
