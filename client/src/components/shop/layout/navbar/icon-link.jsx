import { Link } from "react-router";
import { Button } from "@/components/ui/button";

const IconLink = ({ icon, to }) => {
  return (
    <Link to={to}>
      <Button variant={"ghost"} size={"icon"}>
        {icon}
      </Button>
    </Link>
  );
};

export default IconLink;
