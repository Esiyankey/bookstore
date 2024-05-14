import { createContext, useContext } from "react";

export const bookContext = createContext();

export const useBooks = () => {
  const booksRef = useContext(bookContext);
  if (!booksRef) {
    throw new Error("use Books must be called in a books provider");
  }

  return booksRef;
};
