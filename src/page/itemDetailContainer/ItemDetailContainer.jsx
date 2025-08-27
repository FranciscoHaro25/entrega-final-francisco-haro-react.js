import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import productsMock from "../../components/mocks/productsMock";
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonLink,
} from "../../components/common/buttons";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);

    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundProduct = productsMock.find((p) => p.id === parseInt(id));
        if (foundProduct) {
          resolve(foundProduct);
        } else {
          reject("Producto no encontrado");
        }
      }, 800);
    });

    getProduct
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  const increment = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onAdd = () => {
    console.log(
      `Se agregaron ${quantity} unidades de ${product.name} al carrito`
    );
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
    <div className="bg-gray-50 pt-6 pb-8 min-h-[calc(100vh-200px)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-orange-600">
            Inicio
          </Link>
          <span>/</span>
          {product.categories?.map((cat, idx) => (
            <span key={idx}>
              <Link
                to={`/category/${cat.toLowerCase()}`}
                className="hover:text-orange-600"
              >
                {cat}
              </Link>
              {idx < product.categories.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </span>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagen */}
            <div className="relative h-96 md:h-full bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.stock < 5 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ¡Últimas unidades!
                </div>
              )}
            </div>

            {/* Información */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Categorías */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.categories?.map((category, index) => (
                  <ButtonLink
                    key={index}
                    to={`/category/${category.toLowerCase()}`}
                    variant="orange"
                    size="sm"
                  >
                    {category}
                  </ButtonLink>
                ))}
              </div>

              {/* Precio */}
              <div className="mb-8">
                <div className="text-4xl font-bold text-orange-600">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              {/* Stock */}
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Stock disponible:{" "}
                  <span className="font-semibold">
                    {product.stock} unidades
                  </span>
                </p>
              </div>

              {/* Contador */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <ButtonSecondary
                    onClick={decrement}
                    disabled={quantity <= 1}
                    size="sm"
                  >
                    -
                  </ButtonSecondary>

                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>

                  <ButtonSecondary
                    onClick={increment}
                    disabled={quantity >= product.stock}
                    size="sm"
                  >
                    +
                  </ButtonSecondary>
                </div>

                <ButtonPrimary
                  onClick={onAdd}
                  disabled={product.stock === 0}
                  size="lg"
                  className="w-full"
                >
                  {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
