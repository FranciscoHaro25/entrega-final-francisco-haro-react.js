import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../../hooks/useCart";
import { ItemList } from "../../components/common/itemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const { getProductsByCategory, stockRefresh } = useCart();

  const categoryNames = {
    electronics: "Electrónica",
    deportes: "Deportes",
    clothing: "Ropa",
    books: "Libros",
    toys: "Juguetes",
  };

  useEffect(() => {
    setLoading(true);

    getProductsByCategory(categoryId)
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [categoryId, getProductsByCategory, stockRefresh]);

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

        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
