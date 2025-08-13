import { Link } from "react-router";
import { Separator } from "../../ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-28 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <Link to={"/"} className="text-2xl font-bold lowercase">
              mobit
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Your one-stop shop for all things tech & lifestyle.
            </p>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to={"/"}>Shop</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>Wishlist</Link>
              </li>
              <li>
                <Link to={"/cart"}>Cart</Link>
              </li>
              <li>
                <Link to={"/account"}>Account</Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-muted-foreground">
              <Link to={"#"}>
                <Facebook className="size-5" />
              </Link>
              <Link to={"#"}>
                <Instagram className="size-5" />
              </Link>
              <Link to={"#"}>
                <Twitter className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-28 py-4">
        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} mobit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
