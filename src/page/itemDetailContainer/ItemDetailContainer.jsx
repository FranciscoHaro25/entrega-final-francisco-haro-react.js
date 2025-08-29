import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useCart } from "../../hooks/useCart";
import { ItemDetail } from "../../components/common/itemDetail/ItemDetail";
import { ButtonLink } from "../../components/common/buttons";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, getProductById, stockRefresh } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const prod = await getProductById(id);
        setProduct(prod);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, getProductById, stockRefresh]);

  const handleAddToCart = (quantity) => {
    if (quantity > product.stock) {
      alert("No hay suficiente stock disponible");
      return;
    }

    try {
      addToCart(product, quantity);
      setIsAdding(true);

      setTimeout(() => {
        navigate("/cart");
      }, 1000);
    } catch {
      alert("Hubo un problema al agregar el producto al carrito");
      setIsAdding(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-50 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-gray-50 flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Producto no encontrado
        </h2>
        <ButtonLink to="/" variant="primary">
          Volver al catálogo
        </ButtonLink>
      </div>
    );
  }

  return (
    <ItemDetail product={product} onAdd={handleAddToCart} isAdding={isAdding} />
  );
};

export default ItemDetailContainer;
