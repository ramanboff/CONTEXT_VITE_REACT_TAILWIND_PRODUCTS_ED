import { useContext } from "react";
import tshirt from "../../public/black-tshirt.png";
import { FaShoppingBag } from "react-icons/fa";
import CardContext from "../CardContext";
const Card = ({ name, price }) => {
  const { addToCard } = useContext(CardContext);
  return (
    <div
     
      className="bg-orange-100 rounded text-gray-600 font-bold py-6 cursor-pointer"
    >
      <div className="px-6 flex justify-center items-center">
        <img src={tshirt} alt="product" />
      </div>
      <div className="flex justify-between items-center
       px-12 mt-3 ">
        <h3>{name}</h3>
        <button  onClick={() => addToCard(name, price)} className="flex gap-1  bg-orange-400 rounded-full px-2 py-1 hover:bg-black hover:text-white duration-300">
          <p className="text-[14px] ">add</p>
          <FaShoppingBag   className="text-xl"/>
        </button>
      </div>
      <h4 className="px-12">${price}</h4>
    </div>
  );
};

export default Card;
