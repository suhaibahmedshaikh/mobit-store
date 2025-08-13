import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./navbar/index";

const ShopLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShopLayout;
