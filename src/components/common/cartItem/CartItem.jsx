import { ButtonIcon } from "../buttons/index";

export const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onQuantityChange(item.id, newQuantity);
  };

  const handleRemove = () => {
    if (window.confirm(`¿Quieres eliminar "${item.name}" del carrito?`)) {
      onRemove(item.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/80x80/f97316/ffffff?text=🛒";
          }}
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <p className="text-2xl font-bold text-primary">
            $
            {item.price.toLocaleString("es-EC", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <ButtonIcon
            onClick={() => handleQuantityChange(item.quantity - 1)}
            variant="secondary"
            size="sm"
            disabled={item.quantity <= 1}
          >
            -
          </ButtonIcon>
          <span className="w-8 text-center font-semibold">{item.quantity}</span>
          <ButtonIcon
            onClick={() => handleQuantityChange(item.quantity + 1)}
            variant="primary"
            size="sm"
          >
            +
          </ButtonIcon>
        </div>

        <ButtonIcon
          onClick={handleRemove}
          variant="danger"
          size="md"
          className="text-red-500 hover:text-red-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </ButtonIcon>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 text-right">
        <span className="text-lg font-semibold text-gray-800">
          Subtotal: $
          {(item.price * item.quantity).toLocaleString("es-EC", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
};
