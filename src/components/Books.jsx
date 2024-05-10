import { useState, useEffect, useContext } from "react";
import image from "../assets/aroundImage.png";
import "../styles/books.css";
import { SearchContext } from "./HomepageMain";

export const Books = () => {
  const [books, setBooks] = useState([]);

  const searchObject2 = useContext(SearchContext);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchObject2.searchValue}&key=AIzaSyCtyMhzEs0GwNdNV2MqeafsDIhgRcW-N3Y`
        );
        const data = await response.json();
        console.log("Fetched data:", data.items);
        setBooks(data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [searchObject2.searchValue]);

  return (
    <>
      <div className="books">
        {books.map((book, index) => {
        const imageUrl = book.volumeInfo?.imageLinks?.smallThumbnail;
        const title = book.volumeInfo.title;
        const author = book.volumeInfo.authors?.[0];
          return (
            <div className="book" key={index}>
              <div className="book-image">
                <img className="img" src={imageUrl} alt="image" />
              </div>
              <div className="title">{title}</div>
              <div className="author">{author}</div>
              {/* <div className="rating">Rating: {book.rating}</div> */}
            </div>
          );
        })}
        {books.length === 0 && <p>No books found.</p>}
      </div>
    </>
  );
};
