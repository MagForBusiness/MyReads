import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = () => {
  const [Books, setBooks] = useState([]);
  const [Query, setQuery] = useState("");
  const [shelf, setShelf] = useState("");
  let navigate = useNavigate();
  //initialize dATA
 
  
  const searchresult = async (query) => {
    setQuery(query);
    const res = await BooksAPI.search(query.trim());
   
    if (res.error !== "empty query") {
      setBooks(res);
    } else {
      setBooks([]);
    }
  };
  const shelfChange = () => {
    navigate("/search");
  };
  const fillBooks = (query) => {
    if (query === "") {
   
      setBooks([]);
    } else {
 
      searchresult(query);
    }
  };
  // get book shelf from API
  const GetShelfAPI = async (id) => {
    
    const BookDetail = await BooksAPI.get(id);
    // setLoadData(false);
    setShelf(BookDetail.shelf);
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
          {
            Books.map((book) => {
              // GetShelfAPI(book.id);
              // const BookWithshelf = { ...book, shelf: shelf };
              return (
                <li key={book.id}>
                  <Book book={book} shelfChange={shelfChange} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
