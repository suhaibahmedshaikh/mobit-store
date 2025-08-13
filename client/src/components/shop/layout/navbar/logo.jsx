import { Link } from "react-router";

const Logo = ({ brand }) => {
  return (
    <Link to={"/"} className="text-3xl font-bold lowercase">
      {brand}
    </Link>
  );
};

export default Logo;
