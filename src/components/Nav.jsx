import { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardContext from "../CardContext";

const Nav = () => {
 const {items} = useContext(CardContext)

  return (
    <nav className="w-full fixed bg-orange-200 px-10 py-4 text-gray-600 font-bold shadow-md">
      <div className="flex justify-between items-center bg-orange-200 text-3xl">
       <Link to={"/"}>
       <h1>Wear</h1>
       </Link>
       <Link to={"/checkout"}>
        <div className="flex items-center gap-2">
          <p className="text-sm">click to basket icon watch list of products</p>
          <FaShoppingBag className="text-gray-600 hover:text-white duration-300"/>
          <span>{items.length}</span>
        </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
