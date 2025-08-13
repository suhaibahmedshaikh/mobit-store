import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Hero Banner</h1>
      </section>

      <Separator />

      {/* Category Highlights */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Category 1
          </div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Category 2
          </div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Category 3
          </div>
          <div className="bg-gray-200 h-40 flex items-center justify-center">
            Category 4
          </div>
        </div>
      </section>

      <Separator />

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-60 flex items-center justify-center"
            >
              Product {i + 1}
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Deals or Promotions */}
      <section className="w-full bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
        <p className="text-lg">Catch the latest deals now!</p>
      </section>

      <Separator />

      {/* Recommended for you */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Recommended for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-60 flex items-center justify-center"
            >
              Product {i + 1}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
