import { Heart } from "lucide-react";
import { Button } from "./ui/button";

export const ProductCard = ({ product }) => {
  return (
    <div className="relative border rounded-lg p-4 bg-muted shadow-sm hover:shadow-md transition-shadow duration-200">
      <Button
        variant={"ghost"}
        className="absolute top-2 right-2 hover:bg-white"
      >
        <Heart className="size-5 text-muted-foreground" />
      </Button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-3"
      />

      <div className="text-sm font-medium">{product.name}</div>
      <div className="text-lg font-semibold my-2">{product.price}</div>

      <Button className="w-full">Buy Now</Button>
    </div>
  );
};
