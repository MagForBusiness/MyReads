import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
   
  }, []);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
