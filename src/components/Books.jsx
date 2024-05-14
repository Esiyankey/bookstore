import { useState, useEffect } from "react";
import image from "../assets/aroundImage.png";
import "../styles/books.css";
import { useBooks } from "../context/books_context";
export const Books = () => {
 const {books} = useBooks()

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
              <div className="title">Title: {title}</div>
              <div className="author">Author: {author}</div>
              {/* <div className="rating">Rating: {book.rating}</div> */}
            </div>
          );
        })}
        {books.length === 0 && <p>No books found.</p>}
      </div>
    </>
  );
};
