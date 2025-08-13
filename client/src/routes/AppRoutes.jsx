import { Routes, Route } from "react-router";
import ShopLayout from "@/components/shop/layout";
import Home from "@/pages/shop/Home";
import Products from "@/pages/shop/Products";
import ProductDetail from "@/pages/shop/ProductDetails";
import Cart from "@/pages/shop/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Shop Routes */}
      <Route element={<ShopLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* Admin Routes */}
    </Routes>
  );
};

export default AppRoutes;
