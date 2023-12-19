import tshirt from "../../public/tshirt.png";
import { FaShoppingBag } from "react-icons/fa";
const Card = ({ name, price }) => {
  return (
    <div className="bg-orange-100 rounded text-gray-600 font-bold py-6">
      <div className="px-6 flex justify-center items-center">
        <img src={tshirt} alt="product" />
      </div>
      <div className="flex justify-between items-center px-12 mt-3 ">
        <h3>{name}</h3>
        <FaShoppingBag />
      </div>
      <h4 className="px-12">${price}</h4>
    </div>
  );
};

export default Card;
