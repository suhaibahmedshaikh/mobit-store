import { Heart, ShoppingCart, User } from "lucide-react";
import IconLink from "./icon-link";

const NavIcons = () => {
  return (
    <div className="flex items-center space-x-4">
      <IconLink icon={<Heart className="size-5" />} to={"/shop/wishlist"} />
      <IconLink icon={<ShoppingCart className="size-5" />} to={"/shop/cart"} />
      <IconLink icon={<User className="size-5" />} to={"/shop/account"} />
    </div>
  );
};

export default NavIcons;
