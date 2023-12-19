import { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardContext from "../CardContext";

const Nav = () => {
  const { items } = useContext(CardContext);

  return (
    <nav className="w-full fixed bg-orange-200 px-10 py-4 text-gray-600 font-bold shadow-md">
      <div className="flex justify-between items-end gap-6 bg-orange-200 text-3xl">
        <Link to={"/"}>
          <h1>Wear</h1>
        </Link>
        <Link to={"/checkout"}>
          <div className="flex items-end gap-2">
            <div className="flex text-sm items-center w-full max-w-[200px]">
              click to basket icon watch list of products
            </div>
            <FaShoppingBag className="text-gray-600 hover:text-white duration-300" />
            <div className="text-4xl">{items.length}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
