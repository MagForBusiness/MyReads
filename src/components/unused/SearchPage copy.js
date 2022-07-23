import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Book from "../Book";
import * as BooksAPI from "../../BooksAPI";

const SearchPage = () => {
  const [Books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  //initialize dATA
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
  // SEARCH Query
  const updateQuery = (query) => {
    setQuery(query.trim());
  };
  // const clearQuery = () => {
  //   updateQuery("");
  // };

  const UpdateShelve = async (b, shelve) => {
    await BooksAPI.update(b, shelve);
    // navigate("/");
  };
  const showingBooks =
    query === ""
      ? Books
      : Books.filter(
          (c) =>
            c.title.toLowerCase().includes(query.toLowerCase()) ||
            c.authors
              .join("")
              .toLowerCase()
              .includes(
                query.toLowerCase() ||
                  c.industryIdentifiers
                    .join("")
                    .identifier.toLowerCase()
                    .includes(query.toLowerCase())
              )
        );
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
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} UpdateShelve={UpdateShelve} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
