import React, { useState, useLayoutEffect, useCallback } from "react";
import { BookOption } from "./BookOption";
import * as BooksAPI from "../BooksAPI";

const Book = ({ book }) => {
  const [shelfAdd, setshelfAdd] = useState(book.shelf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getShelf = useCallback(async (boId) => {
    const GetBook = await BooksAPI.get(boId);
    setshelfAdd(GetBook.shelf);
    // return GetBook.shelf;
  });
  useLayoutEffect(() => {
    if (!book.shelf) {
      getShelf(book.id);
      // setshelfAdd("none");
    } else {
      setshelfAdd(book.shelf);
    } //
  }, [book, getShelf]);

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${
              !book.imageLinks
                ? //blank background imageLinks if not existing
                  `"http://books.google.com/books/content?id=73kNFV4sDx8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`
                : book.imageLinks.thumbnail
            })`,
          }}
        ></div>
        <BookOption shelf={shelfAdd} bookID={book.id} book={book} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
      <div className="book-authors">{book.id} </div>
      <div className="book-authors">{shelfAdd} </div>
    </div>
  );
};

export default Book;
