import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Book from "./components/Book";
import * as BooksAPI from "./BooksAPI";

const App = () => {
  const [Books, setBooks] = useState([]);

  //initialize dATA
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);
//handel update
 const UpdateShelve = async (book, shelve) => {
   await BooksAPI.update(book, shelve);
 };
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
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {Books.filter(
                            (b) => b.shelf === "currentlyReading"
                          ).map((bookE) => (
                            <li>
                              <Book book={bookE} UpdateShelve={UpdateShelve} />
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {Books.filter((b) => b.shelf === "wantToRead").map(
                            (bookE) => (
                              <li>
                                <Book book={bookE} />
                              </li>
                            )
                          )}
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {Books.filter((b) => b.shelf === "read").map(
                            (bookE) => (
                              <li>
                                <Book book={bookE} />
                              </li>
                            )
                          )}
                        </ol>
                      </div>
                    </div>
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
