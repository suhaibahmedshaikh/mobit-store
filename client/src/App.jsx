import { Routes, Route } from "react-router";
import Home from "./pages/shop/Home";
import Navbar from "./components/navbar";
import Products from "./pages/shop/Products";
import ProductDetail from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/Cart";
import Checkout from "./pages/shop/Checkout";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/shop" element={<Home />} />
          <Route path="/shop/products" element={<Products />} />
          <Route path="/shop/products/:id" element={<ProductDetail />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
