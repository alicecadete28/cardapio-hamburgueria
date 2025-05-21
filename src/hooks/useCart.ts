import { useState, useMemo } from "react";

export function useCart() {
  const [carrinho, setCarrinho] = useState([]);

  const totalQuantidade = useMemo(() => {
    return carrinho.reduce(
      // @ts-expect-error TS(2339): Property 'quantity' does not exist on type 'never'... Remove this comment to see the full error message
      (totalAcumulado, item) => totalAcumulado + item.quantity,
      0
    );
  }, [carrinho]);

  const totalValor = useMemo(() => {
    return carrinho.reduce(
      // @ts-expect-error TS(2339): Property 'price' does not exist on type 'never'.
      (valorAcumulado, item) => valorAcumulado + item.price * item.quantidade,
      0
    );
  }, [carrinho]);

  function handleAddToCart(event: any) {
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
    // @ts-expect-error TS(2345): Argument of type '(prevCarrinho: never[]) => any[]... Remove this comment to see the full error message
    setCarrinho((prevCarrinho) => {
      // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
      const itemExistente = prevCarrinho.find((item) => item.name === itemName);

      if (itemExistente) {
        return prevCarrinho.map((item) =>
          // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
          item.name === itemName
            // @ts-expect-error TS(2698): Spread types may only be created from object types... Remove this comment to see the full error message
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, novoItem];
      }
    });
  }

  function handleRemoveFromCart(itemId: any) {
    // @ts-expect-error TS(2345): Argument of type '(prevCarrinho: never[]) => any[]... Remove this comment to see the full error message
    setCarrinho((prevCarrinho) => {
      const carrinhoAtualizado = prevCarrinho.map((item) => {
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        if (item.id === itemId) {
          // @ts-expect-error TS(2698): Spread types may only be created from object types... Remove this comment to see the full error message
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
