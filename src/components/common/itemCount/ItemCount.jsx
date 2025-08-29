import { useState } from "react";
import { ButtonSecondary, ButtonPrimary } from "../buttons";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity > stock) {
      alert("No hay suficiente stock disponible");
      return;
    }
    onAdd(quantity);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <ButtonSecondary onClick={decrement} disabled={quantity <= 1} size="sm">
          -
        </ButtonSecondary>

        <span className="text-xl font-semibold w-12 text-center">
          {quantity}
        </span>

        <ButtonSecondary
          onClick={increment}
          disabled={quantity >= stock}
          size="sm"
        >
          +
        </ButtonSecondary>
      </div>

      <ButtonPrimary
        onClick={handleAdd}
        disabled={stock === 0}
        size="lg"
        className="w-full"
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </ButtonPrimary>
    </div>
  );
};
