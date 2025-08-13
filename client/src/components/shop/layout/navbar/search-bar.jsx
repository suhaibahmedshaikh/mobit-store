import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Search"
        className="pl-9 h-10 text-base bg-muted/30 focus-visible:ring-1 focus-visible:ring-muted-foreground focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default SearchBar;
