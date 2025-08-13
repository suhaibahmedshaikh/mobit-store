import { cn } from "@/lib/utils";
import Logo from "./logo";
import NavIcons from "./nav-icons";
import SearchBar from "./search-bar";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <header
        className={cn(
          "flex items-center justify-between px-6 md:px-12 lg:px-28 py-4"
        )}
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <Logo brand={"mobit"} />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>

        <div className="hidden md:block grow">
          <SearchBar />
        </div>

        <div className="hidden md:flex">
          <NavIcons />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
