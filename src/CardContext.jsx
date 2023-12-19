import { createContext } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
  return (
    <CardContext.Provider value={{ item: 1 }}>{children}</CardContext.Provider>
  );
}

export default CardContext;
