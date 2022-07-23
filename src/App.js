/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage";

import * as BooksAPI from "./BooksAPI";
import { BookShelf } from "./components/BookShelf";

const App = () => {
  const [Books, setBooks] = useState([]);

  //initialize dATA
  const UpdateShelve = async (b, shelve) => {
    await BooksAPI.update(b, shelve);
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, [UpdateShelve]);

  return (
    <>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route
          exact
          path="/"
          element={
            <div className="app">
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    {
                      <BookShelf
                        Books={Books}
                        onUpdateBookShelf={UpdateShelve}
                      />
                    }
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
