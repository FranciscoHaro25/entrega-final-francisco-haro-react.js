import { useEffect, useState } from "react";
import productsMock from "../../mocks/productsMock"; // Cambio: import default
// import axios from "axios";
import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get([productsMock])
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error al cargar los productos:", error);
  //     });
  // }, []);
  useEffect(() => {
    setProducts(productsMock);
  }, []);

  //   console.log(products);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Mis PRODUCTOS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
