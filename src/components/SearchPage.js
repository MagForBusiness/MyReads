import { Link } from "react-router-dom";
import React, { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = () => {
  const [Books, setBooks] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [Query, setQuery] = useState("");
  // search method
  const searchresult = async (query) => {
     const res = await BooksAPI.search(query.trim());
    if (res.error !== "empty query") {
      setBooks(res);
    } else {
      setBooks([]);
    }
  };
  const fillBooks = (query) => {
    if (query === "") {
      setBooks([]);
    } else {
      searchresult(query);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            // value={query}
            onChange={(event) => fillBooks(event.target.value)}
            placeholder="Search by title or author"
          />
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
