import { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./counter";

export const Produto = ({ nome, preco }) => {
  const [productCount, setProductCount] = useState(1);
  const converterValorEmReais = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div>
      <h4>{nome}</h4>
      <p>{converterValorEmReais(preco)}</p>

      <Counter 
        onDecrement={() => { 
          setProductCount((prev) => (prev > 1 ? prev - 1 : 1) )
        }}

        onIncrement={() => {
          setProductCount((prev) => prev + 1 )
        }}
      />

      <Button onClick={()=> {
        alert(`${nome} - ${converterValorEmReais(preco)}`);
      }}>
        Adicionar ao carrinho ({productCount}produtos)
      </Button>
    </div>
  );
};
