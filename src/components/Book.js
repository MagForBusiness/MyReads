import { useState } from "react";

const Book = ({ book, UpdateShelve }) => {
  const [Select, setSelect] = useState(book.shelf);
  const handleChange = (event) => {
    setSelect(event.target.value);
    console.log(Select,book.id);
    UpdateShelve(book, setSelect);

  };


  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select value={Select} onChange={handleChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
      <div className="book-authors">{book.id} </div>
      <div className="book-authors">{book.shelf} </div>
    </div>
  );
};

export default Book;
