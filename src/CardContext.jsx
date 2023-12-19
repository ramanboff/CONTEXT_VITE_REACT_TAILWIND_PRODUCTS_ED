import { createContext, useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  //add to card function
  const [items, setItems] = useState([]);
  const addToCard = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };
  //add to card function

  return (
    <CardContext.Provider value={{ items, addToCard }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContext;
