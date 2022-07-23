import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = () => {
  const [Books, setBooks] = useState([]);
  const [Query, setQuery] = useState("");

  const searchresult = async (query) => {
    setQuery(query);
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
