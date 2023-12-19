import { useContext } from "react";
import tshirt from "../../public/w.png";
import { FaShoppingBag } from "react-icons/fa";
import CardContext from "../CardContext";
const Card = ({ name, price }) => {
  const { addToCard } = useContext(CardContext);
  return (
    <div className="bg-orange-100 rounded text-gray-600 font-bold cursor-pointer">
      <div className="pt-2 flex justify-center items-center p-3">
        <img src={tshirt} alt="product" className="object-cover" />
      </div>
      <div
        className="flex justify-between items-center
       px-12"
      >
        <h3>{name}</h3>
        <button
          onClick={() => addToCard(name, price)}
          className="flex items-end gap-1  bg-orange-300 rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300"
        >
          <p className="text-[14px] ">add</p>
          <FaShoppingBag className="text-xl" />
        </button>
      </div>
      <h4 className="px-12">${price}</h4>
    </div>
  );
};

export default Card;
