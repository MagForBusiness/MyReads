import React from "react";
import { BookOption } from "./BookOption";

const Book = ({ book }) => {
  

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
        <BookOption  bookID={book.id} book={book} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

export default Book;
