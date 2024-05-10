import { useState, useEffect } from "react";
import image from "../assets/aroundImage.png";
import '../styles/books.css'
export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCtyMhzEs0GwNdNV2MqeafsDIhgRcW-N3Y');
        const data = await response.json();
        console.log("Fetched data:", data.items);
        setBooks(data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <div className="books">
      {books.map((book, index) => (
        <div className="book" key={index}>
          <div className="book-image">
            <img className="img" src={image} alt="image" />
          </div>
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
          <div className="rating">Rating: {book.rating}</div>
        </div>
      ))}
       {books.length === 0 && <p>No books found.</p>}
    </div>
    </>
  );
};
