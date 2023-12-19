import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full bg-orange-200 px-6 py-4 text-gray-600 font-bold">
      <div className="flex justify-between items-center bg-orange-200">
       <Link to={"/"}>
       <h1>Wear</h1>
       </Link>
       <Link to={"/checkout"}>
        <div className="flex items-center gap-2">
          <FaShoppingBag />
          <span>0</span>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
