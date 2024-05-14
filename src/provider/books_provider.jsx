import React, { useState, useEffect } from "react";
import { bookContext } from "../context/books_context";

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=free-ebooks&key=AIzaSyCtyMhzEs0GwNdNV2MqeafsDIhgRcW-N3Y`
      );
      const data = await response.json();
      console.log("Fetched data:", data.items);
      setBooks(data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks("food recipes");
  }, []);

  return (
    <bookContext.Provider
      value={{
        books,
        fetchBooks,
      }}
    >
      {children}
    </bookContext.Provider>
  );
}
