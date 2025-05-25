import { useState } from "react";
import { Product } from "../types/Product";
import { CartItem } from "../types/CartItem";

export function useCart() {
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCarrinho((prevCarrinho) => {
      // Procura por um item existente com as mesmas customizações
      const existingItem = prevCarrinho.find(
        (item) =>
          item.productId === product.id &&
          JSON.stringify(item.customizations.removedIngredients.sort()) ===
            JSON.stringify(
              (product.customizations?.removedIngredients || []).sort()
            )
      );

      if (existingItem) {
        // Se encontrar um item idêntico, apenas aumenta a quantidade
        return prevCarrinho.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Se não encontrar, cria um novo item
      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}-${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        productId: product.id,
        product,
        quantity: 1,
        customizations: product.customizations || {
          removedIngredients: [],
        },
      };

      return [...prevCarrinho, newItem];
    });
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCarrinho((prevCarrinho) => {
      const item = prevCarrinho.find((item) => item.id === itemId);

      if (!item) return prevCarrinho;

      // Se a quantidade for 1, remove o item
      if (item.quantity === 1) {
        return prevCarrinho.filter((item) => item.id !== itemId);
      }

      // Se a quantidade for maior que 1, diminui a quantidade
      return prevCarrinho.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const totalQuantidade = carrinho.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalValor = carrinho.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );

  return {
    carrinho,
    handleAddToCart,
    handleRemoveFromCart,
    totalQuantidade,
    totalValor,
  };
}
