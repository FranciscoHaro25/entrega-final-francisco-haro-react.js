import { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsMock from "../../components/mocks/productsMock";
import { ProductCard } from "../../components/common/productCard/ProductCard";
import { ButtonLink } from "../../components/common/buttons/index";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  const categoryNames = {
    electronics: "Electrónica",
    deportes: "Deportes",
    clothing: "Ropa",
    books: "Libros",
    toys: "Juguetes",
  };

  useEffect(() => {
    setLoading(true);

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          const filteredProducts = productsMock.filter((product) =>
            product.categories?.some(
              (cat) => cat.toLowerCase() === categoryId.toLowerCase()
            )
          );
          resolve(filteredProducts);
        } else {
          resolve(productsMock);
        }
      }, 600);
    });

    getProducts
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          {categoryId ? (
            <>
              Categoría:{" "}
              <span className="text-orange-600">
                {categoryNames[categoryId] || categoryId}
              </span>
            </>
          ) : (
            "Todos los Productos"
          )}
        </h1>

        <p className="text-center text-gray-600 mb-8">
          {products.length === 0
            ? "No hay productos disponibles"
            : `${products.length} ${
                products.length === 1 ? "producto" : "productos"
              } disponible${products.length === 1 ? "" : "s"}`}
        </p>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="w-24 h-24 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-xl text-gray-600 mb-4">
              No encontramos productos en esta categoría
            </p>
            <ButtonLink to="/" variant="primary" size="md">
              Ver todos los productos
            </ButtonLink>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
