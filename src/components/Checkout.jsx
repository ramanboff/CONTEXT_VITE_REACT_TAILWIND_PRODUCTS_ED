import { useContext } from "react";
import CardContext from "../CardContext";
import { v4 as uuidv4 } from "uuid";

const Checkout = () => {
  const { items } = useContext(CardContext);
  return (
    <div className="pt-20 pb-[900px]">
      <h2 className="text-2xl bg-gray-700 rounded flex justify-center mb-2 font-bold text-white py-2">
        Checkout
      </h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={uuidv4}
            className="flex 
           bg-orange-200 p-2 px-6  rounded text-gray-700 font-bold"
          >
            <h2>{item.name} :</h2>
            <h3> ${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
