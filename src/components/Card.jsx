import tshirt from "../../public/tshirt.png";
import { FaShoppingBag } from "react-icons/fa";
const Card = ({ name, price }) => {
  return (
    <div className="bg-gray-300 rounded text-gray-600 font-bold py-6">
      <div className="px-2">
        <img src={tshirt} alt="product" />
      </div>
      <div className="flex justify-between items-center px-6 ">
        <h3>{name}</h3>
        <FaShoppingBag />
      </div>
      <h4 className="px-6">${price}</h4>
    </div>
  );
};

export default Card;
