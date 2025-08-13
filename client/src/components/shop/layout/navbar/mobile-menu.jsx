import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import SearchBar from "./search-bar";
import NavIcons from "./nav-icons";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className={"p-2"}>
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className={"w-64"}>
        <SheetHeader>
          <SheetTitle className="text-lg font-bold">mobit</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4 p-2">
          <SearchBar />
          <NavIcons />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
