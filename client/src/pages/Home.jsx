import { useEffect } from "react";
import useProductStore from "../store/productStore";
import { Link } from "react-router-dom";

export default function Home() {
  const { products, loading, error, getProducts } = useProductStore();

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <p>Loading products......</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => {
        console.log(product);
        return (
          <div key={product._id} className="border p-4 rounded shadow">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.photos[0]?.secure_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
