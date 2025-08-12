import { ProductCard } from "@/components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Iphone 14 Pro 128GB",
    price: 1399,
    image: "https://placehold.jp/300x300.png",
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 1199,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 3,
    name: "Iphone 14 Pro 128GB",
    price: 1399,
    image: "https://placehold.jp/300x300.png",
  },
  {
    id: 4,
    name: "iPhone 13",
    price: 1199,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 5,
    name: "Iphone 14 Pro 128GB",
    price: 1399,
    image: "https://placehold.jp/300x300.png",
  },
  {
    id: 6,
    name: "iPhone 13",
    price: 1199,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 7,
    name: "Iphone 14 Pro 128GB",
    price: 1399,
    image: "https://placehold.jp/300x300.png",
  },
  {
    id: 8,
    name: "iPhone 13",
    price: 1199,
    image: "https://via.placeholder.com/300x300",
  },

  {
    id: 9,
    name: "Iphone 14 Pro 128GB",
    price: 1399,
    image: "https://placehold.jp/300x300.png",
  },
  {
    id: 10,
    name: "iPhone 13",
    price: 1199,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 11,
    name: "Iphone 14 Pro 128GB",
    price: 1399,
    image: "https://placehold.jp/300x300.png",
  },
  {
    id: 12,
    name: "iPhone 13",
    price: 1199,
    image: "https://via.placeholder.com/300x300",
  },
];

const Products = () => {
  return (
    <div className="w-full container mx-auto flex px-4 md:px-6 py-4 ">
      {/* Sidebar */}
      <main className="flex-1">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
