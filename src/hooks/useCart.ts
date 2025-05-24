import { useState, useMemo } from "react";
import { Product } from "../types/Product";

interface CartItem {
  product: Product & { removedIngredients?: string[] };
  quantity: number;
}

export function useCart() {
  const [carrinho, setCarrinho] = useState<CartItem[]>([]);

  const totalQuantidade = useMemo(() => {
    return carrinho.reduce(
      (totalAcumulado, item) => totalAcumulado + item.quantity,
      0
    );
  }, [carrinho]);

  const totalValor = useMemo(() => {
    return carrinho.reduce(
      (valorAcumulado, item) =>
        valorAcumulado + item.product.price * item.quantity,
      0
    );
  }, [carrinho]);

  function handleAddToCart(product: Product) {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find(
        (item) => item.product.id === product.id
      );

      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { product, quantity: 1 }];
      }
    });
  }

  function handleRemoveFromCart(productId: string) {
    setCarrinho((prevCarrinho) => {
      const carrinhoAtualizado = prevCarrinho.map((item) => {
        if (item.product.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      return carrinhoAtualizado.filter((item) => item.quantity > 0);
    });
  }

  return {
    carrinho,
    totalQuantidade,
    totalValor,
    handleAddToCart,
    handleRemoveFromCart,
  };
}
