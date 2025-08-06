import { cn } from "@/lib/utils";
import Logo from "./logo";
import NavIcons from "./nav-icons";
import SearchBar from "./search-bar";

const Navbar = () => {
  return (
    <header
      className={cn(
        "flex items-center justify-between px-6 md:px-12 lg:px-28 py-4 border-b"
      )}
    >
      <Logo brand={"mobit"} />
      <SearchBar />
      <NavIcons />
    </header>
  );
};

export default Navbar;
