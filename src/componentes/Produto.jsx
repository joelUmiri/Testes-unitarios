import { Button } from "./Button";

export const Produto = ({ nome, preco }) => {
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

      <Button />
    </div>
  );
};
