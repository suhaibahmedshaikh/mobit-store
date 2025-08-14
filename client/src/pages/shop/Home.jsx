import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://placehold.jp/1280x720.png)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            New Season Arrivals
          </h1>
          <p className="text-base md:text-lg">
            Check out latest trends and offers
          </p>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="bg-white text-black hover:bg-gray-200 hover:scale-105 transform transition cursor-pointer"
          >
            Shop Now
          </Button>
        </div>
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
