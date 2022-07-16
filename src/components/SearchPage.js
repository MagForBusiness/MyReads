import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = () => {
  const [Books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  //initialize dATA
  const searchresult = async (query) => {
    setQuery(query.trim());
    const res = await BooksAPI.search(query);
    console.log(res.error);
    if (res.error !== "empty query") {
      setBooks(res); // ***to do set a shelf to every res
    } else {
      setBooks([]);
    }
  };
  const fillBooks = (query) => {
    if (query === "") {
      setBooks([]);
    } else {
      searchresult(query ||" ");
    }
  };


  const UpdateShelve = async (b, shelve) => {
    await BooksAPI.update(b, shelve);
    navigate("/");
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
