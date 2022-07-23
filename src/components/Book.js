import React, { useState, useLayoutEffect, useEffect } from "react";
import { BookOption } from "./BookOption";
import * as BooksAPI from "../BooksAPI";

const Book = ({ book }) => {
  const [shelfAdd, setshelfAdd] = useState(book.shelf);
    const getShelf = async (boId) => {
      const GetBook = await BooksAPI.get(boId);
      // return `{"shelf" : "${GetBook.shelf}"}`;
      setshelfAdd(GetBook.shelf);
    };
  useLayoutEffect(() => {
    if (!book.shelf) {
      console.log(book.id);
      // const newSelf = getShelf(book.id);
      getShelf(book.id);
      // setshelfAdd(newSelf);
    } else {
      setshelfAdd(book.shelf);
    } //
    // console.log(shelfAdd);
  }, [book, shelfAdd]);

  // console.log(book.shelf);

  const UpdateShelve = async (book, Select) => {
    await BooksAPI.update(book, Select);
  };

  const GetSelectedBook = (selectedShelf) => {
    // console.log(selectedShelf);
    UpdateShelve(book, selectedShelf);
  };
  // console.log(book.shelf);

  // console.log(book.shelf);
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
        <BookOption
          shelf={shelfAdd}
          GetSelectedBook={GetSelectedBook}
          bookID={book.id}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
      <div className="book-authors">{book.id} </div>
      <div className="book-authors">{shelfAdd} </div>
    </div>
  );
};

export default Book;
