import { useState, useMemo } from "react";

export function useCart() {
  const [carrinho, setCarrinho] = useState([]);

  const totalQuantidade = useMemo(() => {
    return carrinho.reduce(
      (totalAcumulado, item) => totalAcumulado + item.quantity,
      0
    );
  }, [carrinho]);

  const totalValor = useMemo(() => {
    return carrinho.reduce(
      (valorAcumulado, item) => valorAcumulado + item.price * item.quantidade,
      0
    );
  }, [carrinho]);

  function handleAddToCart(event) {
    const onClickButton = event.currentTarget;
    const itemName = onClickButton.dataset.name; //acesso o nome do item
    const itemPrice = parseFloat(onClickButton.dataset.price); //acesso o preço do item

    const novoItem = {
      id: Date.now().toString() + Math.random().toString(36).substring(2),
      name: itemName,
      price: itemPrice,
      quantity: 1,
    };

    //Vamos definir o novo estado do carrinho (vazio inicialmente)
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.name === itemName);

      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, novoItem];
      }
    });
  }

  function handleRemoveFromCart(itemId) {
    setCarrinho((prevCarrinho) => {
      const carrinhoAtualizado = prevCarrinho.map((item) => {
        if (item.id === itemId) {
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
