import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-xl font-bold">
          mob-it
        </Link>
        <div className="flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Cart</Link>
        </div>
      </div>
    </nav>
  );
}
